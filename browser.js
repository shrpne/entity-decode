/**
 * from https://github.com/vuejs/vue/commit/a855dd0564a657a73b7249469490d39817f27cf7#diff-c0a2623ea5896a83e3b630f236b47b52
 */

let decoder;

function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;

    return decoder.textContent;
}

module.exports = decode;
