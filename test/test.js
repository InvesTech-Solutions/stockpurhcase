const puppeteer = require('puppeteer');

const pageUrl = "http://http://127.0.0.1:3000/";

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('display function', () => {
	beforeEach(async () =)
	test('initial title is correct', () => {

	});
});