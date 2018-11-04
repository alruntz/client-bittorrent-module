'use strict';
const fs = require('fs');
const bencode = require('bencode');
// 1
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');
const download = require('./download');

function torrentStream(torrentPath) {
    var torrent = torrentParser.open(torrentPath);
    console.log('DOWNLOAD');
    download(torrent, torrent.info.name);
}
module.exports = torrentStream;