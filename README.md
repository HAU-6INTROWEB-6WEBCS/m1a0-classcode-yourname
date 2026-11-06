# 👋 M1A0: Hello World in HTML

[![Made with Codex](https://img.shields.io/badge/Made_with-Codex-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/Language-HTML5-E34F26?logo=html5&logoColor=white)

Your first WebCS activity is small on purpose: make a page, view it in a browser, save it in GitHub, and submit the exact version you finished. This activity is for **CS-101, class code 2006**.

## 1. Create your private activity repository

Accept your invitation to [HAU-6INTROWEB-6WEBCS](https://github.com/HAU-6INTROWEB-6WEBCS) first. Sign in with your own GitHub account, then create your activity from this public starter:

1. Choose **Use this template → Create a new repository**.
2. Set **Owner to HAU-6INTROWEB-6WEBCS**.
3. Name it **m1a0-2006-USERNAME**, replacing USERNAME with your GitHub username.
4. Choose **Private**. Your personal details belong only in your private copy.

If the organization is missing from the Owner list, ask the instructor to check your invitation. If the instructor has already assigned you an activity repository, use that one instead of creating a duplicate.

Your activity repository is separate from your workspace, named **student-6webcs-2006-USERNAME**. The workspace holds course notes and planning. Write this activity in your M1A0 repository.

## 2. Clone your activity and open the right folder

Open your new private repository on GitHub. Choose **Code → HTTPS** and copy its clone URL. In your terminal, run git clone followed by that URL, then run cd followed by the new folder's name. For example, replace USERNAME in both commands below with your own GitHub username:

```sh
git clone https://github.com/HAU-6INTROWEB-6WEBCS/m1a0-2006-USERNAME.git
cd m1a0-2006-USERNAME
git remote -v
```

The remote must point to your own M1A0 repository in HAU-6INTROWEB-6WEBCS. Open this folder in your editor and run all activity commands from it.

You need a browser, Git, and Node.js 22.22.2 or a newer Node.js 22 release, with npm. Follow the class setup instructions if any are missing. If the instructor enables Codespaces, this starter includes a Node.js 22 development-container configuration. A Codespaces launch still needs the class setup check.

Install the dependencies from the lockfile:

```sh
npm ci
```

## 3. Build your Hello World page

Open **src/index.html** and write an HTML page with these requirements:

- Declare the short HTML5 doctype.
- Set the html element's language to en.
- Declare UTF-8 character encoding in the head.
- Set the title to exactly **M1A0 Hello World**.
- Put a main heading in the body that says exactly **Hello, World!**.
- Add a paragraph describing your page in your own words.

The comma, capital letters and exclamation mark in the greeting matter. No styling or JavaScript is required for this activity.

Save the file, then open **src/index.html** in your browser. You can use **File → Open File** in the browser or double-click the file in your file manager. After editing, save and refresh the browser. The tab title should show M1A0 Hello World, and the page should display your heading and paragraph.

In your private copy, fill in **student.json** with your full name, student number, school email, class code **2006**, and GitHub username. Keep every value as text, including the student number and class code. Use the same verified identity for this course. Enter the lab room in `room` and the computer number printed on your station in `pcNumber`. Use text values such as `"MGN-202"` and `"07"`. Both fields are required by the tests.

## 4. Check and save your work

```sh
npm test
```

The checks cover the HTML requirements and your identity fields. They fail on the untouched starter because the page and identity are intentionally unfinished. Fix your page and your details; do not edit the tests to make them pass. The paragraph check confirms that text exists; the instructor also reads whether it describes your page.

Review your changes before committing. Only the activity files belong here. Never commit credentials or unrelated personal files.

```sh
git status
git add src/index.html student.json README.md package-lock.json AI-USAGE.md
git commit -m "Complete M1A0 Hello World"
git push
```

## Git on a shared lab Mac

Open your own activity folder and run `git remote -v`. Check that both URLs point to your private M1A0 repo. Open that repo in GitHub using your own account to confirm you can access it.

Before committing on a shared Mac, run `git var GIT_AUTHOR_IDENT` to check the name and email Git will record. If they are missing or belong to someone else, set your own name and GitHub commit email in this activity repo.

```sh
git config --local user.name "Your Name"
git config --local user.email "YOUR-GITHUB-COMMIT-EMAIL"
```

These values control the name and email on your commits. GitHub sign-in controls access to the repository.

### Use VS Code to sign in and push

1. Open the activity folder in VS Code. Check the **Accounts** menu at the bottom left. If someone else's GitHub account is signed in, ask the instructor to help switch accounts.
2. In **Source Control**, stage your activity files and commit them. Open the **…** menu and choose **Push**. If VS Code asks you to sign in, finish the browser prompt with your own GitHub account and return to VS Code.
3. Check GitHub for your new commit before copying its URL for Canvas. At the end of class, sign out of your GitHub account in both VS Code and the browser.

### If macOS uses the wrong saved GitHub account

A push that reports the wrong account, or says the private repo cannot be found even though you can open it in GitHub, can be caused by a saved credential. Check the remote and your GitHub account first. Ask the instructor before changing anything in the shared Keychain.

If the instructor asks you to push to an HTTPS remote from Terminal with your own personal access token, run this from your activity folder. This command bypasses saved credential helpers for this push only.

```sh
git -c credential.helper= push
```

At the prompts, enter your GitHub username and use your token in the password field. Keep the token out of the command, source files, screenshots and chat. If you still see the wrong account or get an access error, show the instructor the error with any secrets hidden.

[GitHub sign-in in VS Code](https://code.visualstudio.com/docs/sourcecontrol/github) · [GitHub credentials on macOS](https://docs.github.com/en/get-started/git-basics/updating-credentials-from-the-macos-keychain)

## 5. Submit the exact commit link in Canvas

A push saves your work. You still need to submit the required evidence:

1. Open your private M1A0 repository on GitHub.
2. Open its commit history and select the commit containing your finished page.
3. Copy the commit page's full URL. It contains **/commit/** followed by the full commit identifier.
4. When the instructor makes **M1A0 in your own Canvas course** available, submit that link using its Website URL option.
5. Reopen the Canvas assignment and verify that it contains the intended commit link.

Submit the commit page, rather than the repository home page, a branch link, or a screenshot. The repository stays private, and the instructor needs access. Report an access problem instead of making the repository public. If you revise your work, submit the new commit link while the assignment allows resubmission; a later push does not change a commit you already submitted.

The Canvas assignment has not been configured by this template. Its availability, deadline and points will be announced in class. This activity does not require an additional Course Platform submission unless the instructor changes its submission instructions.

## AI and other assistance

Follow the instructor's rules for this assessment. Use permitted help to understand setup, HTML and errors, then test and explain your own submission. Ask first if permission is unclear. Never share credentials, personal information, or another student's private work with a tool.

Complete [AI-USAGE.md](AI-USAGE.md) in your private copy. Describe the help you used and credit any applicable sources. Commit the file with your activity.

## If something fails

Tell the instructor which step failed, what the error says, and what you tried. Send private links through the approved class channel. Do not post student details or credentials in this public template's issues. Student-owned checks provide feedback; the instructor uses trusted course checks when assessing work.

---
🤖 **Built with Codex. I don't prompt and pray, I prompt and prove.** Every commit here is co-authored with an AI, on purpose. [How I actually work with AI, receipts and all →](https://tjakoen.github.io/notes/ten-times-zero)
