"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPdfVersion = exports.isValidBuffer = void 0;
function isValidBuffer(pdf) {
    return (Buffer.isBuffer(pdf) && pdf.lastIndexOf("%PDF-") === 0 && pdf.lastIndexOf("%%EOF") > -1) ? true : false;
}
exports.isValidBuffer = isValidBuffer;
function getPdfVersion(pdf) {
    return '';
}
exports.getPdfVersion = getPdfVersion;
