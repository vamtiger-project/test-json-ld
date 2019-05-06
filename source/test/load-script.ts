import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('test-json-ld', function () {
    before(async function () {
        await loadScript({
            src: 'test-json-ld.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="test-json-ld.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});