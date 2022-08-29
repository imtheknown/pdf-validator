

export function isValidBuffer(pdf: Buffer): boolean {
    return (Buffer.isBuffer(pdf) && pdf.lastIndexOf("%PDF-") === 0 && pdf.lastIndexOf("%%EOF") > -1) ? true : false;
}

export function getPdfVersion(pdf: Buffer): string {
    return '';
}