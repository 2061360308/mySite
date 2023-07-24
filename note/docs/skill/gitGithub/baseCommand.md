---
id: gitGithub-baseCommand
slug: /gitGithub-baseCommand
title: Git/GitHub基础命令
date: 2023-7-24
authors: 盧瞳
tags: [github, git]
keywords: [github, git]
---

## 初始化新项目为仓库并推送到github

- `git init`  初始化
- `git add -A`  所有文件添加到暂存区
- `git command -m "提交备注"`  提交
- `git bush -m main`  将分支命名为main
- `git remote add origin https://秘钥@github/用户名/仓库名.git`  添加远程仓库
- `git push -u origin main` 

## 查看提交历史

`git log --stat` stat 参数是为了输出更加详细的信息

## 撤回更改或提交

`git checkout <filename>`  工作区打回去
`git reset HEAD^`  提交后撤回 `HEAD`是当前分支`^`表示前一个分支

## 分支操作

`git checkout -b <branchname>` 以当前分支为基础创建新分支
`git branch`  列举所有分支
`git checkout <branchname>` 切换到某一分支
`git branch -D <branchname>`  删除某一分支
`git merge <branchname>` 合并分支到主分支

## github查询技巧

### 常用前缀后缀

- 百科大全 awesome xxx
- 例子 xxx sample
- 空项目架子 xxx starter / xxx boilerplate
- 教程 xxx tutorial

### 开源项目合集

- https://github.com/trending
- https://github.com/521xuewenihan/HelloGitHub
- https://github.com/ruanyf/weekly
- https://github.com/column/mm-fe
