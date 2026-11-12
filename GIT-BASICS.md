# Git basics: how your work gets from the lab PC to GitHub

Every activity in this course lives in a Git repository on GitHub. You clone it, change it, commit and push, and then submit the link to one exact commit. This reading explains what each of those words means, so that the setup steps make sense and so that you can fix things when they go wrong. Read it before your first activity and come back to it whenever a Git message confuses you.

## What you should be able to do after this reading

- Explain the difference between Git and GitHub.
- Say what a repository, a commit, a remote and a branch are.
- Follow one change from your editor to a commit on GitHub, and name the command for each step.
- Run the commands for cloning, checking, committing and pushing, and match each to its VS Code button.
- Read the output of `git status` and know what to do next.
- Find the URL of one commit and explain why the course asks for it instead of the repository link.

## 1. Git and GitHub are two different things

**Git** is a program on your computer that records the history of a folder. It works offline, and it was written in 2005 by Linus Torvalds to manage the Linux kernel. **GitHub** is a website that stores copies of Git repositories online, so that other people (and your instructor) can see them, and so that your work survives when the lab PC is wiped.

You use Git to save versions of your work. You use GitHub to share them. The course's grader reads your work from GitHub, never from the lab PC, so work that was never pushed does not exist as far as grading is concerned.

*Source:* Pro Git, [1.1 About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and [1.2 A Short History of Git](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git); GitHub Docs, [About GitHub and Git](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git).

## 2. The words you will see every day

| Word | What it means in this course |
| --- | --- |
| Repository (repo) | A project folder whose history Git tracks. Each activity is one repo, such as `m1a0-CLASSCODE-USERNAME`. |
| Commit | A saved snapshot of the whole repo, with a message, an author and a date. A commit never changes after it is made. |
| Commit hash | The long code that names a commit, such as `3f9a1c2`. It appears in the commit's URL. |
| Remote | The copy of the repo on GitHub. Git calls it `origin`. |
| Clone | Download a repo from GitHub to your computer, with its full history. |
| Push | Send your new commits from your computer to GitHub. |
| Pull | Bring new commits from GitHub down to your computer. |
| Branch | A named line of commits. Activities use the default branch, `main`. |

*Source:* Pro Git, [1.3 What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) and [2.5 Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes); GitHub Docs, [GitHub glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary).

## 3. The three places a change lives

A change you make moves through three places before it reaches GitHub, and most Git confusion comes from not knowing which place a change is in.

1. **The working folder.** You save a file in VS Code. Git notices the change, but nothing is recorded yet. `git status` lists the file as modified.
2. **The staging area.** You choose which changes go into the next commit. In VS Code this is the **+** next to a file in Source Control; on the command line it is `git add`.
3. **The repository history.** You commit with a short message that says what changed. The snapshot is now permanent, but only on this computer.

Then one more step: **push** sends the new commits to GitHub. Until you push, your commit exists only on the lab PC.

```text
save file  ->  stage (git add)  ->  commit (git commit)  ->  push (git push)
working        staging area         local history            GitHub
```

*Source:* Pro Git, [1.3 What is Git?, The Three States](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) and [2.2 Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository).

## 4. The commands, one lab session from start to finish

Type each command on its own line and press Enter. Windows PowerShell does not accept `&&`, so never join two commands into one line. Replace the parts in capitals with your own details.

**Get your repo onto the lab PC (once per session).** Copy the URL from your repo's green **Code** button on GitHub.

```bash
git clone https://github.com/ORG/ACTIVITY-CLASSCODE-USERNAME.git
cd ACTIVITY-CLASSCODE-USERNAME
code .
```

`git clone` makes a new folder with the repo's name, and `cd` moves you into it. Every command after this must run inside that folder.

**Check the wiring before you change anything.**

```bash
git status
git remote -v
git var GIT_AUTHOR_IDENT
```

The first shows your branch and any changes, the second shows that `origin` is your own private repo, and the third shows the name and email your commits will carry.

**Save your work to GitHub (repeat as often as you like).** Edit and save your files in VS Code, then:

```bash
git status
git add .
git commit -m "Describe what you changed"
git push
```

`git add .` stages every changed file in the folder; `git add README.md` stages just one. The message after `-m` should say what the commit does, for example "Add the club notice header". `git push` sends the commit to GitHub.

**See what you have done.**

```bash
git log --oneline
git diff
```

`git log --oneline` lists your commits, newest first, one per line with its short hash. `git diff` shows the lines you changed but have not staged yet. Press `q` to leave either view if it fills the screen.

**Bring down changes made somewhere else** (for example, on another PC or in the GitHub website):

```bash
git pull
```

### Command reference

| Command | What it does | In VS Code |
| --- | --- | --- |
| `git clone URL` | Downloads a repo into a new folder. | Command Palette, **Git: Clone** |
| `cd FOLDER` | Moves the terminal into a folder. | (terminal only) |
| `git status` | Reports what changed and what is staged. Changes nothing. | The **Source Control** panel |
| `git add FILE` or `git add .` | Stages a file, or every change. | **+** next to a file, or next to **Changes** |
| `git commit -m "MESSAGE"` | Records the staged changes as a commit. | Type the message, then **Commit** |
| `git push` | Sends your commits to GitHub. | **Sync Changes**, or **Push** in the **...** menu |
| `git pull` | Brings new commits down from GitHub. | **Pull** in the **...** menu |
| `git log --oneline` | Lists commits, newest first. | The **Source Control Graph** |
| `git diff` | Shows unstaged line changes. | Click a changed file |
| `git remote -v` | Shows where `origin` points. | (terminal only) |
| `git var GIT_AUTHOR_IDENT` | Shows the name and email your next commit will carry. | (terminal only) |

The terminal and the Source Control panel do the same thing to the same repo, so you can mix them: commit in VS Code and check with `git status` in the terminal.

*Source:* Pro Git, [2.1 Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), [2.2 Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository), [2.3 Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) and [2.5 Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes); Visual Studio Code Docs, [Source Control](https://code.visualstudio.com/docs/sourcecontrol/overview).

## 5. Reading `git status`

`git status` is the command to run whenever you are unsure what state your work is in. It changes nothing; it only tells you where things are.

| What it says | What it means | What to do |
| --- | --- | --- |
| `nothing to commit, working tree clean` | Every saved change is committed. | Push if you have not yet. |
| `Changes not staged for commit` | Files changed but not staged. | Stage them, then commit. |
| `Changes to be committed` | Staged, waiting for a commit. | Commit with a message. |
| `Your branch is ahead of 'origin/main' by 1 commit` | Committed but not pushed. | Push. |
| `fatal: not a git repository` | You are in the wrong folder. | `cd` into your cloned repo folder. |

The last row is the most common mistake in the lab. After `git clone`, Git makes a new folder named after the repo, and every later command must run inside it. That is why the setup guide has a separate `cd` step.

*Source:* Pro Git, [2.2 Recording Changes to the Repository, Checking the Status of Your Files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository).

## 6. Who you are: the commit author

Every commit records an author name and email. Git does not check them; it writes whatever it is told. On a shared lab PC, the previous student's details may still be set, and their name would then appear on your work. The course launcher sets your name and email for your session only, and the setup check `git var GIT_AUTHOR_IDENT` shows what Git will write. If it shows someone else, stop and rerun the launcher before you commit.

Your commit email should be one your GitHub account knows, such as your school address or your GitHub noreply address, so that GitHub links the commit to your profile.

*Source:* Pro Git, [1.6 First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup); GitHub Docs, [Setting your commit email address](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

## 7. Signing in without a password

GitHub stopped accepting account passwords for Git in 2021. Git now signs in with a token, and the course launcher gets one for you through the GitHub CLI and your browser, keeps it only for that session, and deletes it when you type `exit`. That is why the setup guide tells you never to type a password or token into Git: if Git asks, something is wrong with the session, and the fix is to rerun the launcher, not to paste a secret into a lab PC.

*Source:* GitHub Blog, [Token authentication requirements for Git operations](https://github.blog/security/application-security/token-authentication-requirements-for-git-operations/) (2020); GitHub CLI manual, [gh auth login](https://cli.github.com/manual/gh_auth_login).

## 8. Why the course asks for a commit link

A repository changes every time you push. A commit never changes. When you submit the URL of one commit (it contains `/commit/` followed by the hash), you are saying "grade exactly this version". The grader reads that snapshot, so later pushes cannot change what you submitted, and the date on the commit shows when the work was done.

To find it: open your repo on GitHub, click the commit count or the **History** link, open the commit with your finished work, and copy the URL from the address bar.

*Source:* GitHub Docs, [About commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits).

## 9. When something goes wrong

| Message or symptom | Likely cause | Fix |
| --- | --- | --- |
| `fatal: not a git repository` | Not inside the cloned folder. | `cd` into the repo folder. |
| `rejected ... fetch first` on push | GitHub has commits you do not, for example from another PC. | `git pull`, then push again. |
| Git asks for a username and password | The launcher's session is not active in this window. | Close the window and rerun the launcher. |
| `Repository not found` | Wrong URL, or you are not a collaborator on that repo. | Copy the URL again from your own repo's **Code** button. |
| Your commit is not on GitHub | You committed but did not push. | Push, then refresh the GitHub page. |

## Check yourself

1. You committed in VS Code and closed the PC. Can your instructor see the work? Why or why not?
2. `git status` says your branch is ahead of `origin/main` by two commits. What does that mean, and what do you do?
3. Why does the course ask for a commit URL rather than the repository URL?
4. Git asks you for a password. What do you do?
