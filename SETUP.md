# Set up your M1A0 activity

You need Git and Visual Studio Code. Install Node.js 22.22.2 or a newer Node.js 22 release, with npm.

## Create your private activity repo

Accept the invitation to [HAU-6INTROWEB-6WEBCS](https://github.com/HAU-6INTROWEB-6WEBCS). If the instructor already gave you an activity repo, use it. Otherwise, choose **Use this template → Create a new repository** on the starter, set the owner to **HAU-6INTROWEB-6WEBCS**, and choose **Private**.

Name your repo `m1a0-CLASSCODE-USERNAME`. Replace CLASSCODE with the numeric class code shown in your Canvas course and USERNAME with your GitHub username. The required prefix is `m1a0-CLASSCODE-` with your actual class code. Use your activity repo for the code and your separate student workspace for notes.

## Download and start the launcher

Open [start-activity.sh](start-activity.sh) on the GitHub template and choose **Download raw file**. Save it as `start-activity.sh` in Downloads. On Mac, open **Terminal**. On Windows, open **Git Bash** from Git for Windows. Run these commands from that standalone terminal.

```bash
cd "$HOME/Downloads"
bash ./start-activity.sh
```

If you saved it elsewhere, change into that folder first. Enter your GitHub username, name and GitHub commit email when asked. The launcher opens a fresh VS Code profile and leaves a terminal prompt in the new work folder. The prompts set your Git commit identity. GitHub sign-in happens separately.

## Clone and check your Git setup

1. In VS Code, open the Command Palette and select **Git: Clone**. Paste your private activity repo's HTTPS URL from GitHub's **Code** menu. Choose the work folder printed by the launcher as the destination. Confirm your own GitHub account in the browser prompt.
2. Open the cloned repo in that VS Code window. Choose **Terminal → New Terminal** to open a terminal there. You can also use the terminal the launcher opened and run `cd m1a0-CLASSCODE-USERNAME` with your actual repo name. In any other terminal, change into the full path of your cloned repo first.
3. Paste this check into the terminal.

```bash
git status --short --branch && git remote -v && git var GIT_AUTHOR_IDENT
```

The first line should show your branch. The fetch and push URLs should point to your private repo in **HAU-6INTROWEB-6WEBCS**. The last line should show your own name and commit email. If it shows someone else's details, return to the launcher terminal or the new VS Code window and check again. The command checks local wiring. A successful VS Code clone confirms read access, and a successful push confirms write access.

Use VS Code **Source Control** to commit and push on the lab computer. Check your new commit on GitHub before submitting its URL. At the end of class, sign out of GitHub in VS Code and the browser, close the lab window, and type `exit` in the launcher terminal. Your local files remain in the work folder.

Continue with the [activity instructions](README.md).
