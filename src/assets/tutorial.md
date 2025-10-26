---
Title: "PostgreSQL Presentation"
author: >
  Group A — 
  Jianing Xue B01812701 | Xinrui Gao B01819974 | Weixue Kong B01819838 | Fang Tang B01814427
---

# PostgreSQL Installation & DBeaver Setup

## Download DBeaver

Frist, we need install **DBeaver**.

https://dbeaver.io/download/
<br>


***Step1***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step1.png)

Take ***Windows*** as an example.

<br>

***Step2***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step2.png)

This is the **welcome page** of the DBeaver installer.  

There’s nothing to configure here — just click **Next** to start the setup process.  

Think of it as the **starting point** of the installation wizard.

<br>


***Step3***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step3.png)

Here you’ll see the **Apache License 2.0** agreement.  

You must click **I Agree** to continue the installation.  

If you don’t accept the license, the setup will stop right here — so just read it quickly and agree to proceed.
<br>


***Step4***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step4.png)

Now you decide **who will have access** to DBeaver on this computer:  

- **For anyone who uses this computer (all users)** – installs DBeaver system-wide, requires **administrator privileges**.
  
- **For me (current user)** – installs only for your own account (the most common choice).  
Select the option you prefer, then hit **Next**.

<br>


***Step5***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step5.png)

Here you choose which parts of DBeaver to install:  

- **DBeaver Community** – the main program (must be selected).
  
- **Include Java** – highly recommended if you **don’t already have Java** installed; DBeaver needs it to run.
  
- **Reset Settings** – optional, restores default preferences.
  
- **Associate SQL files** / **Associate SQLite database files** – lets Windows open those file types directly in DBeaver.
  
Once you’ve made your selections, click **Next**.

<br>


***Step6***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step6.png)

Here you pick the **installation directory**.  

You can click **Browse…** to change the path.  

Make sure the drive has **enough free space**, then press **Next**.

<br>


***Step7***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step7.png)

Choose the **Start Menu folder name** where shortcuts will appear — usually **DBeaver Community**.  

If you don’t want shortcuts at all, check **Do not create shortcuts**.  

When you’re ready, click **Install** to begin copying files.

<br>


***Step8***

![Step 1](/Group-A-PostgreSQL/images/tutorial-step8.png)

At first launch (or at the end of setup), you’ll see a window asking for your **language preference**.  

Pick a language from the dropdown (for example, **English**) and click **OK**. 

This only affects the **user interface text**, not your database connections or data.

<br>


## Tips

- If you don’t already have Java installed, **make sure to check “Include Java” in Step 5**.
  
- Installing for **all users** (Step 4) may require **admin rights**.

- On the first run after installation, DBeaver might ask to create a **workspace** — just accept the default.
  
You can later add **database connections**, install drivers, and start exploring data right away.

<br>


***Summary:***  

This eight-step setup takes you from the **installer launch** to a fully working **DBeaver environment**.  

Follow the prompts, keep an eye on the **Include Java** option, and within minutes you’ll be ready to connect to databases and start querying.


## Install PostgreSQL

Also, we need install **PostgreSQL** to be connected with DBeaver.

https://www.postgresql.org/download/

<br>


***Step1- Select Your Operating System***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step9.png)

This is the **official PostgreSQL Downloads** page.  

In the **Packages and Installers** section, choose your system: **Windows**, **macOS**, or **Linux** (the image highlights Windows and macOS).  

Click **Windows** to open the **Windows installer** page.

<br>


***Step2- Windows Installer Page***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step10.png)

**Windows Installers** page.  

It recommends using the **Interactive Installer by EDB**, which includes the **PostgreSQL Server**, **pgAdmin 4**, and **Stack Builder**.  

Click **Download the Installer** to continue.

<br>


***Step3- Choose Version and Download***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step11.png)

This is EDB’s **Download PostgreSQL** page.  

On the left, select the **PostgreSQL version** you want (for example **18.0**); on the right, choose the correct platform.  

Click the **Windows x86-64** download link for your version to get the installer.

<br>


***Step4- Setup Welcome Screen***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step12.png)

When you open the installer, this **Setup – PostgreSQL** window appears.  

Nothing to change here — just click **Next** to start the installation wizard.

<br>


***Step5- Choose Installation Directory***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step13.png)

Select the folder where **PostgreSQL** will be installed. 

The default is usually  
`C:\Program Files\PostgreSQL\<version>`. 

You can click **Browse...** to change it, but the default works for most users.  

Click **Next** to continue.

<br>


***Step6- Select Components***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step14.png)

Here you pick which **components** to install:  

- **PostgreSQL Server** – the core database engine (required) 

- **pgAdmin 4** – the graphical management tool
  
- **Stack Builder** – optional add-on downloader
  
- **Command Line Tools** – includes `psql` and utilities
  
Leave everything checked and click **Next**.

<br>


***Step7- Select Data Directory***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step15.png)

This defines where your **database data** will be stored.  

The default location is a sub-folder named **`data`** inside the installation path. 

Keep the default unless you want to use another drive, then click **Next**.  

In professional setups, the data directory is often stored on a separate disk for better performance and easier backups.

<br>


***Step8- Set Superuser Password***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step16.png)

Here you create a password for the **`postgres` superuser account**. 

You’ll need this password to connect as the administrator.

Enter a **strong password** twice and click **Next**. 

Don’t forget it — you’ll need it every time you manage the database.

<br>


***Step9- Specify Port Number***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step17.png)

Choose the **port number** PostgreSQL will use to accept connections.  

The default is **5432**, which is the standard port.  

Keep **5432** unless it’s already in use; if so, choose another like **5433** or **5434**, then click **Next**.  

Remember this number for later connections.

<br>


***Step10- Select Locale***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step18.png)

Choose the **locale** (language and regional settings) for your database cluster. 

It affects text sorting and character handling.  

Use **DEFAULT** (your system locale) in most cases, then click **Next**.

<br>


***Step11- Pre-Installation Summary***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step19.png)

This page summarizes all your settings — installation path, data directory, port, locale, and components.  

Review everything carefully, then click **Next** to proceed, or **Back** to change anything.

<br>


***Step12- Ready to Install***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step20.png)

A confirmation screen appears showing that **PostgreSQL is ready to install**. 

Click **Next** to begin copying files and configuring the database service.

<br>


***Step13- Installation Progress***

![Step 2](/Group-A-PostgreSQL/images/tutorial-step21.png)

PostgreSQL is now being installed.  

You’ll see a **progress bar** showing files being copied and configured.  

Wait until it completes — once done, you’ll see the **Finish** screen, where you can launch **Stack Builder** or simply close the wizard.

<br>


## Extra Tips

- Always **remember your `postgres` password** — you’ll need it later.
  
- If port **5432** is already used by another service, pick a different one and write it down.
    
- After installation, open **pgAdmin 4**, log in with your password, and check that the **postgres** database is visible and working.
  
- You can reopen **Stack Builder** anytime to install optional packages like **PostGIS** or **database drivers**.

<br>


***Summary:***  

These steps take you from the download page all the way to a fully functional **PostgreSQL setup**.  

Once done, you’ll have a secure database ready to use in **pgAdmin** or any other SQL client.



## connect 

<video src="/Group-A-PostgreSQL/videos/slide18.mp4" controls></video>
