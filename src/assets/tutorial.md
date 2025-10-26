---
Title: "PostgreSQL Presentation"
author: >
  Group A — 
  Jianing Xue B01812701 | Xinrui Gao B01819974 | Weixue Kong B01819838 | Fang Tang B01814427
---

# PostgreSQL Installation & DBeaver Setup

## Download DBeaver

Frist, we need install **DBeaver**.

**Step1**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step1.png)

Take ***Windows*** as an example.

**Step2**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step2.png)

This is the **welcome page** of the DBeaver installer.  

There’s nothing to configure here — just click **Next** to start the setup process.  

Think of it as the **starting point** of the installation wizard.

**Step3**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step3.png)

Here you’ll see the **Apache License 2.0** agreement.  

You must click **I Agree** to continue the installation.  

If you don’t accept the license, the setup will stop right here — so just read it quickly and agree to proceed.

**Step4**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step4.png)

Now you decide **who will have access** to DBeaver on this computer:  

- **For anyone who uses this computer (all users)** – installs DBeaver system-wide, requires **administrator privileges**.
  
- **For me (current user)** – installs only for your own account (the most common choice).  
Select the option you prefer, then hit **Next**.

**Step5**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step5.png)

Here you choose which parts of DBeaver to install:  

- **DBeaver Community** – the main program (must be selected).
  
- **Include Java** – highly recommended if you **don’t already have Java** installed; DBeaver needs it to run.
  
- **Reset Settings** – optional, restores default preferences.
  
- **Associate SQL files** / **Associate SQLite database files** – lets Windows open those file types directly in DBeaver.
  
Once you’ve made your selections, click **Next**.

**Step6**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step6.png)

Here you pick the **installation directory**.  

By default, it installs under your user folder (for example, `AppData\Local\DBeaver`). 

You can click **Browse…** to change the path.  

Make sure the drive has **enough free space**, then press **Next**.

**Step7**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step7.png)

Choose the **Start Menu folder name** where shortcuts will appear — usually **DBeaver Community**.  

If you don’t want shortcuts at all, check **Do not create shortcuts**.  

When you’re ready, click **Install** to begin copying files.

**Step8**
![Step 1](/Group-A-PostgreSQL/images/tutorial-step8.png)

At first launch (or at the end of setup), you’ll see a window asking for your **language preference**.  

Pick a language from the dropdown (for example, **English**) and click **OK**. 

This only affects the **user interface text**, not your database connections or data.

## Tips

- If you don’t already have Java installed, **make sure to check “Include Java” in Step 5**.
  
- Installing for **all users** (Step 4) may require **admin rights**.

- On the first run after installation, DBeaver might ask to create a **workspace** — just accept the default.
  
You can later add **database connections**, install drivers, and start exploring data right away.

**Summary:**  

This eight-step setup takes you from the **installer launch** to a fully working **DBeaver environment**.  

Follow the prompts, keep an eye on the **Include Java** option, and within minutes you’ll be ready to connect to databases and start querying.


## Step 2 — Install PostgreSQL


## Step 3 — Verify Installation


## Step 4 — Install DBeaver


## Step 5 — Connect DBeaver to PostgreSQL


## Step 6 — Create Your First Table (Video)
<video src="/Group-A-PostgreSQL/videos/tutorial-create-table.mp4" controls></video>
