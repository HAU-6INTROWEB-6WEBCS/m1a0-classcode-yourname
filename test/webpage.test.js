// Adapted from the course engine's INTROWEB m1a1 Vitest/jsdom checks.
// See NOTICE for source attribution and license information.
import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { JSDOM } from 'jsdom'

const html = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8')
const page = new JSDOM(html).window.document
const identity = JSON.parse(
  readFileSync(new URL('../student.json', import.meta.url), 'utf8'),
)

describe('M1A0: Hello World page', () => {
  it('declares the short HTML5 doctype', () => {
    expect(page.doctype, 'Declare <!DOCTYPE html>.').not.toBeNull()
    expect(page.doctype?.name.toLowerCase()).toBe('html')
    expect(page.doctype?.publicId).toBe('')
    expect(page.doctype?.systemId).toBe('')
  })

  it('identifies the page language as English', () => {
    expect(
      page.documentElement.getAttribute('lang'),
      'Set lang="en" on the html element.',
    ).toBe('en')
  })

  it('declares UTF-8 character encoding', () => {
    const charset = page.querySelector('head meta[charset]')
    expect(charset, 'Declare UTF-8 in the head.').not.toBeNull()
    expect(charset?.getAttribute('charset')?.toLowerCase()).toBe('utf-8')
  })

  it('sets the browser tab title to M1A0 Hello World', () => {
    expect(page.title.trim()).toBe('M1A0 Hello World')
  })

  it('displays the exact greeting in a main heading', () => {
    expect(page.querySelector('body h1')?.textContent.trim()).toBe('Hello, World!')
  })

  it('includes a paragraph describing the page', () => {
    const paragraphs = [...page.querySelectorAll('body p')]
    expect(
      paragraphs.some((paragraph) => paragraph.textContent.trim().length > 0),
      'Write a paragraph describing your page.',
    ).toBe(true)
  })
})

describe('Student identity in your private copy', () => {
  it('contains the required details as non-empty text', () => {
    for (const field of [
      'fullName',
      'studentNumber',
      'studentEmail',
      'classCode',
      'githubAccount',
    ]) {
      expect(typeof identity[field], `Keep ${field} as text.`).toBe('string')
      expect(identity[field]?.trim(), `Fill in ${field} in student.json.`).toBeTruthy()
    }
  })

  it('uses class code 2006 for CS-101', () => {
    expect(identity.classCode).toBe('2006')
  })
})
