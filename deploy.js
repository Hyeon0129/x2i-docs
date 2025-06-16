// 📁 deploy_zip.js
require("dotenv").config();
const ftp = require("basic-ftp");
const archiver = require("archiver");
const fs = require("fs");
const path = require("path");
const https = require("https");

const BUILD_DIR = path.join(__dirname, "build");
const BACKUP_DIR = path.join(__dirname, "backups");
const PHP_PATH = path.join(__dirname, "unzip.php");

const FTP_CONFIG = {
    host: "ftp.x2i.dev",
    user: "zhtmah6795@docs.x2i.dev",
    password: process.env.FTP_PASS,
    secure: false
};

const UNZIP_URL = `https://docs.x2i.dev/unzip.php?key=${process.env.AUTH_KEY}`;

const phpContent = `<?php
$authKey = \"${process.env.AUTH_KEY}\";

if (!isset($_GET['key']) || $_GET['key'] !== $authKey) {
    http_response_code(403);
    exit(\"\u274c Unauthorized\");
}

$zipFile = \"build.zip\";
$extractTo = \".\";

$zip = new ZipArchive();
if ($zip->open($zipFile) === TRUE) {
    $zip->extractTo($extractTo);
    $zip->close();
    echo \"\u2705 압축 해제 완료\";
    unlink($zipFile);
    unlink(__FILE__);
} else {
    echo \"\u274c 압축 해제 실패\";
}
?>`;

function getBackupFilename() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0') + 'mon';
    const dateStr = now.toISOString().split("T")[0]; // YYYY-MM-DD

    const yearDir = path.join(BACKUP_DIR, `${year}`);
    const monthDir = path.join(yearDir, `${month}`);

    if (!fs.existsSync(yearDir)) {
        fs.mkdirSync(yearDir);
    }
    if (!fs.existsSync(monthDir)) {
        fs.mkdirSync(monthDir);
    }

    return path.join(monthDir, `${dateStr}_docs.x2i.dev.zip`);
}

async function zipBuildFolder() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(BACKUP_DIR)) {
            fs.mkdirSync(BACKUP_DIR);
        }

        const ZIP_PATH = path.join(__dirname, "build.zip");
        const BACKUP_PATH = getBackupFilename();

        const output = fs.createWriteStream(ZIP_PATH);
        const archive = archiver("zip", { zlib: { level: 9 } });

        output.on("close", () => {
            fs.copyFileSync(ZIP_PATH, BACKUP_PATH);
            console.log(`\u{1F4BE} 백업 완료: ${BACKUP_PATH}`);
            resolve();
        });

        archive.on("error", reject);
        archive.pipe(output);
        archive.directory(BUILD_DIR, false);
        archive.finalize();
    });
}

async function generateUnzipPhp() {
    fs.writeFileSync(PHP_PATH, phpContent);
    console.log("\u{1F4C4} unzip.php 자동 생성 완료");
}

async function uploadToFTP() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access(FTP_CONFIG);
        await client.cd("docs.x2i.dev");
        await client.uploadFrom(path.join(__dirname, "build.zip"), "build.zip");
        await client.uploadFrom(PHP_PATH, "unzip.php");
        console.log("\u2705 FTP 업로드 완료");
    } catch (err) {
        console.error("\u274c FTP 업로드 실패", err);
    }

    client.close();
}

async function triggerUnzip() {
    return new Promise((resolve, reject) => {
        https.get(UNZIP_URL, res => {
            let data = "";
            res.on("data", chunk => data += chunk);
            res.on("end", () => {
                console.log(`\u{1F4EC} 서버 응답: ${data}`);
                resolve();
            });
        }).on("error", reject);
    });
}

(async () => {
    await zipBuildFolder();
    await generateUnzipPhp();
    await uploadToFTP();
    await triggerUnzip();
})();