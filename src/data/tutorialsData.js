const tutorials = [
	// ==========================================
	// INTERNET BASICS (Calm Waters)
	// ==========================================
	{
		id: 0,
		title: "Wi-Fi",
		description: "What is Wi-Fi and how does it work?",
		category: "Internet Basics",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is Wi-Fi?",
				content: "Wi-Fi is a technology that allows devices like computers, smartphones, and tablets to connect to the internet without using physical cables. The name \"Wi-Fi\" doesn't actually stand for anything specific - it's simply a brand name that's become synonymous with wireless internet."
			},
			{
				heading: "How Does Wi-Fi Work?",
				content: "Wi-Fi works by using radio waves to transmit information between your device and a router. The router is connected to the internet through a cable (usually from your internet service provider), and it broadcasts a wireless signal that your devices can pick up. Think of it like a radio station broadcasting music - your device is the radio that receives the signal."
			},
			{
				heading: "Understanding Your Wi-Fi Network",
				content: "Every Wi-Fi network has a name (called an SSID) and usually a password. When you connect to Wi-Fi for the first time, you'll need to select your network name from a list and enter the password. Once connected, your device will usually remember this and connect automatically in the future."
			},
			{
				heading: "Tips for Better Wi-Fi",
				content: "Place your router in a central location for the best coverage. Keep it away from walls, metal objects, and other electronics that might interfere with the signal. If you have a large home, you might need a Wi-Fi extender to boost the signal in distant rooms."
			}
		]
	},
	{
		id: 1,
		title: "Web Browsers",
		description: "What is a browser and how does it work?",
		category: "Internet Basics",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is a Web Browser?",
				content: "A web browser is an application that lets you access and view websites on the internet. It's your window to the World Wide Web. Popular browsers include Google Chrome, Safari, Microsoft Edge, and Mozilla Firefox. Without a browser, you wouldn't be able to visit websites, watch online videos, or check your email on the web."
			},
			{
				heading: "How Browsers Work",
				content: "When you type a web address (like www.example.com) or click a link, your browser sends a request to a server somewhere in the world. That server sends back the website's files, and your browser turns those files into the visual page you see. This all happens in just seconds!"
			},
			{
				heading: "Key Browser Features",
				content: "Browsers come with helpful features like bookmarks (to save your favorite sites), tabs (to have multiple pages open at once), history (to see previously visited sites), and a search bar. Most browsers also have a private or incognito mode that doesn't save your browsing history."
			},
			{
				heading: "Staying Safe While Browsing",
				content: "Look for the padlock icon in the address bar - this means the website is secure. Avoid clicking on suspicious links or pop-ups. Keep your browser updated to get the latest security fixes. Most browsers will warn you if you're about to visit a potentially dangerous website."
			}
		]
	},
	{
		id: 2,
		title: "Email",
		description: "What is email and how does it work?",
		category: "Internet Basics",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is Email?",
				content: "Email (electronic mail) is a way to send messages over the internet. It's like regular mail, but instant and free. You can send text, pictures, documents, and more to anyone with an email address, anywhere in the world. Common email services include Gmail, Outlook, Yahoo Mail, and Apple Mail."
			},
			{
				heading: "Understanding Email Addresses",
				content: "An email address has two parts separated by the @ symbol. The first part is your username (like \"john.smith\"), and the second part is the domain (like \"gmail.com\"). Together, they create a unique address like \"john.smith@gmail.com\". No two people can have the same email address."
			},
			{
				heading: "Composing and Sending Email",
				content: "To send an email, you need the recipient's email address in the \"To\" field. Add a subject line to summarize your message. Write your message in the body, and click Send. You can also CC (carbon copy) others who should see the email, or BCC (blind carbon copy) to include someone secretly."
			},
			{
				heading: "Managing Your Inbox",
				content: "Your inbox is where new emails arrive. Most email services automatically sort spam (junk mail) into a separate folder. You can organize emails into folders, mark important ones with stars or flags, and archive old messages to keep your inbox clean. The search function helps you find specific emails quickly."
			},
			{
				heading: "Email Safety Tips",
				content: "Never open attachments from unknown senders. Be suspicious of emails asking for personal information or passwords - legitimate companies won't ask for these via email. Watch for spelling errors and strange sender addresses, which often indicate scam emails."
			}
		]
	},
	{
		id: 3,
		title: "Search Engines",
		description: "How to effectively search the internet",
		category: "Internet Basics",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is a Search Engine?",
				content: "A search engine is a website that helps you find information on the internet. Google is the most popular, but there are others like Bing, DuckDuckGo, and Yahoo. You type what you're looking for, and the search engine shows you a list of relevant websites."
			},
			{
				heading: "How to Search Effectively",
				content: "Be specific with your search terms. Instead of searching \"weather,\" try \"weather forecast New York today.\" Use quotation marks to search for exact phrases, like \"chocolate chip cookie recipe.\" If you're not finding what you need, try different words that mean the same thing."
			},
			{
				heading: "Understanding Search Results",
				content: "Search results show a title, a web address, and a brief description. Results at the very top marked \"Ad\" or \"Sponsored\" are paid advertisements. The regular results below are ranked by what the search engine thinks is most helpful. Click any result to visit that website."
			},
			{
				heading: "Advanced Search Tips",
				content: "Add a minus sign to exclude words (like \"apple -fruit\" to find Apple the company). Search within a specific site using \"site:\" (like \"site:wikipedia.org dolphins\"). Use \"filetype:\" to find specific file types (like \"budget template filetype:pdf\")."
			}
		]
	},
	{
		id: 4,
		title: "Downloading Files",
		description: "Understanding downloads and file types",
		category: "Internet Basics",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is Downloading?",
				content: "Downloading means copying a file from the internet to your computer or device. When you save a photo, document, or program from a website, you're downloading it. The file moves from a server somewhere in the world to your device's storage."
			},
			{
				heading: "Common File Types",
				content: "Files have extensions that tell you what type they are. Documents might be .pdf, .doc, or .txt. Images are often .jpg, .png, or .gif. Music files are usually .mp3 or .m4a. Video files might be .mp4 or .mov. Programs for Windows are .exe, while Mac programs are .dmg or .app."
			},
			{
				heading: "Where Do Downloads Go?",
				content: "By default, downloaded files usually go to a \"Downloads\" folder on your computer. You can find this folder in File Explorer (Windows) or Finder (Mac). Most browsers let you choose a different location or ask you where to save each file."
			},
			{
				heading: "Downloading Safely",
				content: "Only download files from websites you trust. Be cautious of free software offers that seem too good to be true. Never download email attachments from unknown senders. Keep your antivirus software active to scan downloads automatically. If a download starts unexpectedly, cancel it immediately."
			}
		]
	},

	// ==========================================
	// COMPUTER FUNDAMENTALS (Calm Waters)
	// ==========================================
	{
		id: 5,
		title: "Understanding Hardware",
		description: "The physical parts of your computer",
		category: "Computer Fundamentals",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is Hardware?",
				content: "Hardware refers to the physical parts of a computer - the things you can touch. This includes everything from the screen you're looking at to the keyboard you type on. If you can physically hold it, it's hardware."
			},
			{
				heading: "Essential Components",
				content: "The CPU (Central Processing Unit) is the brain of your computer. RAM (Random Access Memory) is temporary working memory for active tasks. The hard drive or SSD stores all your files permanently. The motherboard connects all these parts together. The power supply provides electricity to everything."
			},
			{
				heading: "Input Devices",
				content: "Input devices let you communicate with your computer. The keyboard lets you type text and commands. The mouse or trackpad lets you point and click. Microphones capture your voice. Webcams capture video. Scanners convert physical documents to digital files."
			},
			{
				heading: "Output Devices",
				content: "Output devices display information from your computer. The monitor or screen shows you visual information. Speakers and headphones play audio. Printers create physical copies of documents. Each helps you receive information from your computer in different ways."
			},
			{
				heading: "Caring for Your Hardware",
				content: "Keep your computer in a clean, dust-free environment. Don't block ventilation openings - computers need airflow to stay cool. Handle devices gently and avoid liquid spills. Regularly clean your keyboard and screen with appropriate materials."
			}
		]
	},
	{
		id: 6,
		title: "Understanding Software",
		description: "Programs and applications explained",
		category: "Computer Fundamentals",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is Software?",
				content: "Software is the set of instructions that tells your computer what to do. Unlike hardware, you can't physically touch software - it exists as code. Every program, app, and even your operating system is software."
			},
			{
				heading: "Operating Systems",
				content: "The operating system (OS) is the main software that runs your computer. Windows, macOS, and Linux are operating systems for computers. iOS and Android are operating systems for phones and tablets. The OS manages all other programs and lets you interact with your device."
			},
			{
				heading: "Applications and Programs",
				content: "Applications (apps) are software designed to help you do specific tasks. Word processors help you write documents. Web browsers let you access the internet. Photo editors let you modify images. Games entertain you. Each application is built to serve a particular purpose."
			},
			{
				heading: "Installing and Uninstalling",
				content: "You can add new software to your computer by installing it. On Windows, you might download an installer file or use the Microsoft Store. On Mac, you use the App Store or download applications directly. To remove software you no longer need, use your system's uninstall feature."
			},
			{
				heading: "Keeping Software Updated",
				content: "Software updates fix bugs, add features, and patch security holes. Enable automatic updates when possible. Pay attention to update notifications - they're usually important. Updated software runs better and keeps you safer from security threats."
			}
		]
	},
	{
		id: 7,
		title: "File Management",
		description: "Organizing files and folders",
		category: "Computer Fundamentals",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Understanding Files and Folders",
				content: "Files are individual documents, photos, videos, or other data stored on your computer. Folders (also called directories) are containers that hold files and other folders. Think of folders like filing cabinets that help you organize related files together."
			},
			{
				heading: "Navigating Your Files",
				content: "On Windows, use File Explorer to browse your files. On Mac, use Finder. Both show your folder structure on the left side and folder contents on the right. Double-click folders to open them. Click the back button to return to the previous folder."
			},
			{
				heading: "Creating Organization",
				content: "Create folders for different types of content - like \"Work Documents,\" \"Family Photos,\" or \"Music.\" Right-click (or Control-click on Mac) to create new folders. Give folders clear, descriptive names. You can create folders inside other folders for more detailed organization."
			},
			{
				heading: "Moving and Copying Files",
				content: "To move a file, drag it to a new location. To copy, hold Ctrl (Windows) or Option (Mac) while dragging. You can also right-click and choose Cut/Copy, then Paste in the destination. Moving removes the file from its original location; copying leaves the original intact."
			},
			{
				heading: "Deleting and Recovering",
				content: "Delete files you no longer need by pressing the Delete key or dragging them to the Recycle Bin (Windows) or Trash (Mac). Deleted files aren't gone immediately - you can restore them from the Bin/Trash. To permanently delete, empty the Recycle Bin or Trash."
			}
		]
	},
	{
		id: 8,
		title: "Keyboard Shortcuts",
		description: "Essential shortcuts to speed up your work",
		category: "Computer Fundamentals",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Why Use Keyboard Shortcuts?",
				content: "Keyboard shortcuts let you perform actions quickly without using the mouse. Once learned, they save significant time. Instead of navigating through menus, you press a combination of keys. Most shortcuts use Ctrl on Windows or Command (Cmd) on Mac plus another key."
			},
			{
				heading: "Essential Copy and Paste",
				content: "Ctrl+C (Cmd+C on Mac) copies selected text or files. Ctrl+X (Cmd+X) cuts (copies and removes) the selection. Ctrl+V (Cmd+V) pastes what you copied. These three shortcuts work almost everywhere and are probably the most useful to learn first."
			},
			{
				heading: "Undo and Redo",
				content: "Made a mistake? Ctrl+Z (Cmd+Z) undoes your last action. You can often press it multiple times to undo several actions. Ctrl+Y (Cmd+Shift+Z on Mac) redoes an action you just undid. These shortcuts work in most programs and can save you from many errors."
			},
			{
				heading: "Working with Text",
				content: "Ctrl+A (Cmd+A) selects all text or items. Ctrl+B (Cmd+B) makes text bold. Ctrl+I (Cmd+I) makes text italic. Ctrl+F (Cmd+F) opens the Find function to search within a document or webpage. These work in most word processors and text editors."
			},
			{
				heading: "File and Window Management",
				content: "Ctrl+S (Cmd+S) saves your current document - use this often! Ctrl+P (Cmd+P) opens the print dialog. Ctrl+N (Cmd+N) opens a new document or window. Alt+Tab (Cmd+Tab) switches between open programs. Ctrl+W (Cmd+W) closes the current tab or window."
			}
		]
	},
	{
		id: 9,
		title: "Using a Mouse",
		description: "Mouse basics and techniques",
		category: "Computer Fundamentals",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Mouse Basics",
				content: "A mouse is a pointing device that lets you interact with your computer screen. As you move the mouse on your desk, a pointer (cursor) moves on the screen. The pointer changes shape depending on what it's hovering over - an arrow for general use, a hand for links, an I-beam for text."
			},
			{
				heading: "Clicking Actions",
				content: "A single left-click selects items or activates buttons. A double-click (two quick clicks) opens files and programs. A right-click opens a context menu with additional options. On Mac with a single-button mouse, hold Control and click for right-click actions."
			},
			{
				heading: "Dragging and Dropping",
				content: "To drag, press and hold the left mouse button, move the mouse, then release. This moves files to new locations, selects text, or resizes windows. Drag from a corner to resize a window. Drag a file to a folder to move it there."
			},
			{
				heading: "The Scroll Wheel",
				content: "The wheel between the mouse buttons lets you scroll up and down through documents and webpages. Roll it toward you to scroll down, away from you to scroll up. Some mice let you click the wheel for additional functions, like opening links in new tabs."
			},
			{
				heading: "Trackpads and Alternatives",
				content: "Laptops use trackpads instead of mice. Slide your finger across the pad to move the cursor. Tap to click, or use the built-in buttons. Two-finger scrolling moves through pages. Many people use both a trackpad and a mouse depending on the situation."
			}
		]
	},

	// ==========================================
	// SMARTPHONES & TABLETS (Calm Waters)
	// ==========================================
	{
		id: 10,
		title: "Touchscreen Basics",
		description: "Gestures and navigation",
		category: "Smartphones & Tablets",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "How Touchscreens Work",
				content: "Modern touchscreens respond to the electrical charge in your fingernips. When you touch the screen, sensors detect the location and respond accordingly. This is why touchscreens don't work well with regular gloves - special touchscreen gloves have conductive fingertips."
			},
			{
				heading: "Basic Gestures",
				content: "Tap once to select or open something - like clicking a mouse. Tap and hold (long press) for additional options - like right-clicking. Swipe by moving your finger across the screen to scroll or switch between pages. These three gestures will get you through most tasks."
			},
			{
				heading: "Pinch to Zoom",
				content: "Place two fingers on the screen and spread them apart to zoom in on photos, maps, or webpages. Pinch them together to zoom out. This gesture works in most apps where zooming makes sense. It's especially useful for reading small text or examining photo details."
			},
			{
				heading: "Navigating Your Device",
				content: "Swipe up from the bottom to go home or see open apps. Swipe down from the top to see notifications and quick settings. Most devices have a back gesture (swipe from the left edge) or a back button. The home screen shows your apps - swipe left and right to see more pages."
			},
			{
				heading: "Typing on Touchscreens",
				content: "The keyboard appears automatically when you need to type. Tap letters to type them. Use the shift key for capitals and the symbols key for numbers and punctuation. Most keyboards offer autocorrect and word suggestions above the keys to speed up typing."
			}
		]
	},
	{
		id: 11,
		title: "Installing Apps",
		description: "Downloading from app stores",
		category: "Smartphones & Tablets",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "What is an App Store?",
				content: "App stores are official marketplaces for downloading apps to your device. iPhone and iPad use the Apple App Store. Android devices use the Google Play Store. These stores verify apps for safety and provide a secure way to download and update applications."
			},
			{
				heading: "Finding Apps",
				content: "Open your device's app store and use the search bar to find apps by name. You can also browse categories like Games, Productivity, or Social. Check the ratings (stars) and read reviews from other users to gauge an app's quality before downloading."
			},
			{
				heading: "Downloading and Installing",
				content: "Tap \"Get\" (App Store) or \"Install\" (Play Store) to download a free app. For paid apps, you'll see the price instead. You may need to confirm with your password, Face ID, or fingerprint. The app downloads and appears on your home screen automatically."
			},
			{
				heading: "App Permissions",
				content: "Apps may ask permission to access features like your camera, location, or contacts. Only grant permissions that make sense for the app's purpose. A camera app needs camera access, but a calculator probably doesn't. You can change permissions later in Settings."
			},
			{
				heading: "Updating and Removing Apps",
				content: "App updates bring new features and security fixes. Enable automatic updates in settings, or check the app store regularly. To remove an app, press and hold its icon, then select delete or uninstall. Your data and purchases are usually saved to your account."
			}
		]
	},
	{
		id: 12,
		title: "Taking Photos",
		description: "Camera tips and basics",
		category: "Smartphones & Tablets",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Opening the Camera",
				content: "Find the Camera app on your home screen - it usually has a camera icon. Many devices let you quickly access the camera from the lock screen by swiping or pressing a button. This quick access helps you capture spontaneous moments."
			},
			{
				heading: "Taking Great Photos",
				content: "Hold your device steady with both hands. Tap the screen where you want the camera to focus - usually on your subject's face or the main point of interest. Make sure you have good lighting; natural light often works best. Press the shutter button (usually a circle) to take the photo."
			},
			{
				heading: "Basic Camera Modes",
				content: "Photo mode is for standard pictures. Video mode records moving footage. Portrait mode blurs the background to highlight your subject. Panorama lets you capture wide scenes by panning across. Most phones also have night mode for low-light situations."
			},
			{
				heading: "Viewing Your Photos",
				content: "Your photos are saved in the Photos or Gallery app. Open it to see all your pictures organized by date. You can tap any photo to view it full-screen, then swipe left or right to see others. Pinch to zoom in on details."
			},
			{
				heading: "Sharing Photos",
				content: "Open a photo and tap the share icon (usually a box with an arrow). You can send it via text message, email, or social media. You can also use AirDrop (iPhone) or Nearby Share (Android) to send photos directly to nearby devices."
			}
		]
	},
	{
		id: 13,
		title: "Managing Storage",
		description: "Keeping your device running smoothly",
		category: "Smartphones & Tablets",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Understanding Device Storage",
				content: "Your phone or tablet has limited storage space for apps, photos, videos, and files. When storage fills up, you can't install new apps or take more photos. Check your storage in Settings > Storage (Android) or Settings > General > iPhone Storage (iOS)."
			},
			{
				heading: "What Uses the Most Space?",
				content: "Photos and videos are usually the biggest space consumers, especially high-resolution videos. Apps vary widely - games often need several gigabytes. Downloaded music and podcasts add up. Messaging apps store all the photos and videos you've received."
			},
			{
				heading: "Freeing Up Space",
				content: "Delete apps you no longer use. Remove old photos and videos, or back them up to cloud storage first. Clear app caches in Settings. Delete downloaded content from streaming apps you've already watched. Empty your recently deleted photos folder."
			},
			{
				heading: "Using Cloud Storage",
				content: "Cloud services like iCloud, Google Photos, or Dropbox store your files on internet servers instead of your device. This frees up local storage while keeping your files accessible. Many services offer free storage up to a limit, with paid upgrades for more space."
			},
			{
				heading: "Preventing Storage Problems",
				content: "Enable automatic cloud backup for photos. Regularly review and delete unneeded content. Stream music and videos instead of downloading when you have good internet. Before downloading large files, make sure you have space and really need them."
			}
		]
	},
	{
		id: 14,
		title: "Battery Life Tips",
		description: "Making your charge last longer",
		category: "Smartphones & Tablets",
		difficultyLevel: "Calm Waters",
		sections: [
			{
				heading: "Understanding Battery Usage",
				content: "Your device's battery powers everything from the screen to background apps. Check which apps use the most battery in Settings > Battery. The screen is typically the biggest power consumer, followed by cellular and Wi-Fi connections."
			},
			{
				heading: "Quick Wins for Battery Life",
				content: "Lower your screen brightness - even a little helps. Enable auto-brightness to adjust automatically. Turn on battery saver or low power mode when running low. Turn off Bluetooth and location services when you're not using them."
			},
			{
				heading: "Managing Apps",
				content: "Close apps you're not actively using, especially navigation and streaming apps. Disable background app refresh for apps that don't need real-time updates. Turn off unnecessary notifications - each one wakes your screen and uses power."
			},
			{
				heading: "Charging Best Practices",
				content: "You don't need to drain your battery completely before charging - modern batteries prefer partial charges. Avoid extreme temperatures while charging. Using your device while charging generates extra heat. Fast charging is convenient but regular charging is gentler on battery health."
			},
			{
				heading: "Long-Term Battery Health",
				content: "Batteries naturally degrade over time. Avoid letting your battery regularly drop to 0% or stay at 100% for long periods. Many devices have optimized charging that learns your schedule and limits charging to 80% until you need it. Consider battery replacement after 2-3 years if capacity drops significantly."
			}
		]
	},

	// ==========================================
	// SETUP & INSTALLATION (Open Seas)
	// ==========================================
	{
		id: 15,
		title: "Setting Up a New Computer",
		description: "First-time setup guide",
		category: "Setup & Installation",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Unboxing and Physical Setup",
				content: "Remove all components from the packaging carefully. For a desktop, connect the monitor, keyboard, mouse, and power cables. For a laptop, just connect the power adapter. Place your computer on a flat, stable surface with good ventilation. Keep the box and materials in case you need them for warranty service."
			},
			{
				heading: "Initial Power On",
				content: "Press the power button and wait for the setup process to begin. Windows and Mac computers will guide you through initial configuration. This process typically takes 15-30 minutes. Ensure you have internet access (Wi-Fi password) before starting, as some steps require it."
			},
			{
				heading: "Account Setup",
				content: "You'll need to create or sign in with a Microsoft account (Windows) or Apple ID (Mac). This account syncs your settings, allows app store purchases, and enables device recovery. Choose a strong password and enable two-factor authentication for security."
			},
			{
				heading: "Initial Settings",
				content: "The setup will ask about privacy settings, location services, and diagnostic data sharing. Read each option and choose based on your comfort level. You can always change these later in Settings. Set your time zone, language, and keyboard layout."
			},
			{
				heading: "First Updates",
				content: "After setup, your computer will likely need updates. Let these complete before installing other software - they include important security fixes. Windows Update (Settings > Update) and macOS Software Update (System Settings > General > Software Update) handle this automatically."
			},
			{
				heading: "Essential First Steps",
				content: "Install antivirus software if not included. Set up automatic backups (Windows Backup or Mac Time Machine). Install your web browser of choice. Transfer files from your old computer using cloud storage, external drives, or built-in migration tools."
			}
		]
	},
	{
		id: 16,
		title: "Installing Software",
		description: "Safely downloading and installing programs",
		category: "Setup & Installation",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Where to Get Software",
				content: "Always download software from official sources. Use the Microsoft Store (Windows) or Mac App Store when possible. Otherwise, go directly to the software company's website. Avoid third-party download sites - they often bundle unwanted programs or malware with legitimate software."
			},
			{
				heading: "Windows Installation",
				content: "Downloaded programs typically come as .exe or .msi files. Double-click the file to start installation. Read each screen carefully - many installers try to add browser toolbars or change settings. Choose \"Custom\" installation when available to control what gets installed."
			},
			{
				heading: "Mac Installation",
				content: "Mac programs usually come as .dmg files. Double-click to open, then drag the application to your Applications folder. Some apps use .pkg installers that guide you through the process. If macOS says an app can't be opened because it's from an unidentified developer, you may need to approve it in Security settings."
			},
			{
				heading: "Avoiding Unwanted Software",
				content: "Uncheck any boxes offering additional programs during installation. Watch for pre-checked options to change your homepage or default search engine. \"Express\" or \"Recommended\" installation often includes extras you don't want. Take your time and read every screen."
			},
			{
				heading: "After Installation",
				content: "Check if the program added itself to startup (programs that run when your computer starts). Remove unnecessary startup programs to keep your computer fast. Create desktop shortcuts for frequently used programs. Register or activate software if required."
			}
		]
	},
	{
		id: 17,
		title: "Creating User Accounts",
		description: "Managing accounts on your computer",
		category: "Setup & Installation",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Why Multiple Accounts?",
				content: "Separate user accounts let multiple people use one computer with their own files, settings, and privacy. Each person has their own desktop, documents folder, and browser bookmarks. Children's accounts can have parental controls. It also adds security - if one account is compromised, others are protected."
			},
			{
				heading: "Types of Accounts",
				content: "Administrator accounts can install software, change settings, and manage other accounts. Standard accounts can use the computer but need admin permission for system changes. Guest accounts provide temporary, limited access. Child accounts can have content restrictions and time limits."
			},
			{
				heading: "Creating Accounts on Windows",
				content: "Go to Settings > Accounts > Family & other users. Click \"Add account\" and follow the prompts. You can use a Microsoft account (recommended for sync features) or create a local-only account. Set the account type based on who will use it."
			},
			{
				heading: "Creating Accounts on Mac",
				content: "Go to System Settings > Users & Groups. Click the + button to add a new user. Choose the account type: Administrator, Standard, or with Parental Controls. Each user can have their own Apple ID for personal purchases and iCloud."
			},
			{
				heading: "Account Security",
				content: "Every account should have a strong, unique password. Enable Windows Hello (fingerprint/face) or Touch ID for convenient secure login. Don't share admin passwords with standard users. Review account activity periodically and disable unused accounts."
			}
		]
	},
	{
		id: 18,
		title: "Connecting to Networks",
		description: "Wi-Fi and Ethernet setup",
		category: "Setup & Installation",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Wired vs Wireless",
				content: "Ethernet (wired) connections are faster and more reliable but require a cable to your router. Wi-Fi (wireless) offers freedom of movement but can be affected by distance and interference. Desktop computers often use Ethernet; laptops typically rely on Wi-Fi."
			},
			{
				heading: "Connecting via Ethernet",
				content: "Plug one end of an Ethernet cable into your computer's Ethernet port and the other into your router. Most systems automatically configure the connection. The port has small LEDs that blink when connected and active. If you don't have an Ethernet port, USB adapters are available."
			},
			{
				heading: "Connecting to Wi-Fi",
				content: "Click the Wi-Fi icon in your taskbar (Windows) or menu bar (Mac). Select your network name from the list. Enter the password when prompted. Check \"Connect automatically\" to reconnect in the future. A successful connection shows the Wi-Fi icon without warning symbols."
			},
			{
				heading: "Troubleshooting Connection Issues",
				content: "If you can't connect, restart your router by unplugging it for 30 seconds. Make sure you're entering the correct password - it's case-sensitive. Move closer to the router if the signal is weak. On your computer, try turning Wi-Fi off and on again."
			},
			{
				heading: "Network Security",
				content: "Only connect to networks you trust. Avoid public Wi-Fi for sensitive tasks like banking. If you must use public Wi-Fi, use a VPN for encryption. At home, ensure your router uses WPA3 or WPA2 encryption - never leave it open or use outdated WEP."
			}
		]
	},
	{
		id: 19,
		title: "Printer Setup",
		description: "Connecting and configuring printers",
		category: "Setup & Installation",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Types of Printer Connections",
				content: "USB printers connect directly to your computer with a cable. Network printers connect to your Wi-Fi and can be used by multiple devices. Some printers support both. Wireless printers offer more flexibility but require initial setup on your network."
			},
			{
				heading: "USB Printer Setup",
				content: "Connect the printer to your computer with a USB cable and turn it on. Windows and Mac usually detect the printer automatically and install drivers. If prompted to install software, use the included disc or download drivers from the manufacturer's website."
			},
			{
				heading: "Wireless Printer Setup",
				content: "First, connect the printer to your Wi-Fi network using its built-in screen or WPS button. Then add it to your computer: Windows (Settings > Bluetooth & devices > Printers) or Mac (System Settings > Printers & Scanners). Select your printer from the list of discovered devices."
			},
			{
				heading: "Installing Printer Drivers",
				content: "Drivers are software that let your computer communicate with your printer. Modern systems often install basic drivers automatically. For full features (scanning, special print options), install the complete software from the manufacturer's website. Keep drivers updated for best performance."
			},
			{
				heading: "Printing Your First Page",
				content: "Open any document and press Ctrl+P (Cmd+P on Mac). Select your printer from the list. Choose options like number of copies, color vs black-and-white, and paper size. Click Print. If nothing happens, check that the printer is on, has paper, and is selected as the active printer."
			}
		]
	},

	// ==========================================
	// SECURITY & PRIVACY (Open Seas)
	// ==========================================
	{
		id: 20,
		title: "Strong Passwords",
		description: "Creating and managing secure passwords",
		category: "Security & Privacy",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Why Passwords Matter",
				content: "Passwords are your first defense against unauthorized access to your accounts. Weak passwords can be guessed in seconds by automated tools. A single compromised password can lead to identity theft, financial loss, or privacy violations. Strong passwords are essential for protecting yourself online."
			},
			{
				heading: "Creating Strong Passwords",
				content: "Use at least 12 characters - longer is better. Mix uppercase, lowercase, numbers, and symbols. Avoid personal information like birthdays, names, or common words. Consider using passphrases: random words combined like \"correct-horse-battery-staple\" are both secure and memorable."
			},
			{
				heading: "Password Managers",
				content: "Password managers generate, store, and fill in strong unique passwords for all your accounts. You only need to remember one master password. Popular options include Bitwarden, 1Password, and the built-in managers in browsers. They're much safer than reusing passwords or writing them down."
			},
			{
				heading: "Two-Factor Authentication (2FA)",
				content: "Two-factor authentication adds a second verification step beyond your password. Even if someone steals your password, they can't access your account without the second factor. Common types include codes sent to your phone, authenticator apps, or physical security keys. Enable 2FA on all important accounts."
			},
			{
				heading: "What to Do If Compromised",
				content: "If you suspect a password has been stolen, change it immediately. Check for unauthorized activity on that account. Change passwords on any other accounts that used the same password. Enable 2FA if you haven't already. Watch for suspicious emails or messages."
			}
		]
	},
	{
		id: 21,
		title: "Recognizing Scams",
		description: "Avoiding phishing and fraud",
		category: "Security & Privacy",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "What is Phishing?",
				content: "Phishing is when criminals try to trick you into revealing passwords, credit card numbers, or other sensitive information. They often pretend to be trusted companies like banks, tech companies, or government agencies. Phishing can happen via email, text messages, phone calls, or fake websites."
			},
			{
				heading: "Warning Signs in Emails",
				content: "Be suspicious of urgent language like \"Your account will be closed!\" or \"Act now!\" Check the sender's email address carefully - scammers use addresses that look similar to real ones. Watch for spelling errors, generic greetings like \"Dear Customer,\" and requests for personal information."
			},
			{
				heading: "Dangerous Links and Attachments",
				content: "Never click links in suspicious emails. Instead, go directly to the company's website by typing the address yourself. Hover over links to preview the actual destination. Never open attachments from unknown senders - they can contain malware. When in doubt, contact the company directly through official channels."
			},
			{
				heading: "Phone Scams",
				content: "Scammers may call claiming to be tech support, the IRS, or your bank. Real companies rarely call unexpectedly to ask for personal information. If in doubt, hang up and call the company's official number. Never give remote access to your computer to unsolicited callers."
			},
			{
				heading: "Protecting Yourself",
				content: "Trust your instincts - if something seems suspicious, it probably is. Verify requests through official channels before providing any information. Use unique passwords so one breach doesn't compromise everything. Keep software updated, as updates often fix security vulnerabilities scammers exploit."
			}
		]
	},
	{
		id: 22,
		title: "Antivirus Software",
		description: "Protecting your computer from threats",
		category: "Security & Privacy",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "What is Antivirus Software?",
				content: "Antivirus software protects your computer from malicious programs including viruses, ransomware, spyware, and more. It scans files, monitors behavior, and blocks threats before they can cause damage. Think of it as a security guard for your computer."
			},
			{
				heading: "Built-in Protection",
				content: "Windows includes Windows Security (formerly Windows Defender), which provides solid protection for most users. Mac computers have XProtect and other security features built in. These built-in tools are often sufficient for careful users, though additional software may add features."
			},
			{
				heading: "Choosing Antivirus Software",
				content: "If you want additional protection, look for reputable brands like Bitdefender, Norton, Kaspersky, or Malwarebytes. Free versions provide basic protection; paid versions add extras like VPNs or identity monitoring. Avoid installing multiple antivirus programs - they can conflict with each other."
			},
			{
				heading: "Keeping Protection Active",
				content: "Ensure your antivirus is always running and up-to-date. Updates include protection against new threats discovered daily. Enable automatic scans to check your system regularly. Pay attention to warnings and don't ignore them - they're trying to protect you."
			},
			{
				heading: "Safe Computing Habits",
				content: "Antivirus software isn't perfect - safe habits matter too. Download software only from official sources. Don't open suspicious email attachments. Be cautious with USB drives from others. Keep your operating system and all software updated. Regular backups protect you if something does go wrong."
			}
		]
	},
	{
		id: 23,
		title: "Privacy Settings",
		description: "Controlling what you share online",
		category: "Security & Privacy",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Why Privacy Matters",
				content: "Every time you use a device or go online, data about you is collected. This can include your location, browsing habits, contacts, and more. While some collection is necessary for services to function, excessive data collection can affect your privacy and security. Taking control of your privacy settings helps limit unnecessary data sharing."
			},
			{
				heading: "Device Privacy Settings",
				content: "Review your phone or computer's privacy settings. On iPhone, check Settings > Privacy & Security. On Android, go to Settings > Privacy. On Windows, visit Settings > Privacy & security. On Mac, check System Settings > Privacy & Security. Each section controls what apps and services can access."
			},
			{
				heading: "App Permissions",
				content: "Apps request access to features like your camera, microphone, location, and contacts. Only grant permissions that make sense for the app's purpose. A weather app needs location; a calculator doesn't. Regularly review and revoke permissions for apps you no longer use or trust."
			},
			{
				heading: "Browser Privacy",
				content: "Browsers track your activity through cookies and other methods. Use private/incognito mode for sensitive browsing. Consider privacy-focused browsers like Firefox or Brave. Install extensions that block trackers. Clear cookies periodically. Check your browser's privacy settings and strengthen them."
			},
			{
				heading: "Social Media Privacy",
				content: "Review privacy settings on every social media platform you use. Limit who can see your posts and profile information. Be careful about sharing location, workplace, and personal details. Remember that \"friends only\" content can still be screenshot and shared. Periodically search your name online to see what's publicly visible."
			}
		]
	},
	{
		id: 24,
		title: "Safe Browsing",
		description: "Staying secure while surfing the web",
		category: "Security & Privacy",
		difficultyLevel: "Open Seas",
		sections: [
			{
				heading: "Recognizing Secure Websites",
				content: "Look for the padlock icon in your browser's address bar - this indicates the connection is encrypted with HTTPS. The web address should start with \"https://\" not just \"http://\". Never enter sensitive information like passwords or credit cards on sites without the padlock."
			},
			{
				heading: "Avoiding Malicious Websites",
				content: "Be wary of websites with lots of pop-ups or aggressive advertising. Watch for typos in web addresses designed to trick you (like \"amaz0n.com\"). If your browser warns you about a website, take the warning seriously. Avoid clicking on links in suspicious emails or messages."
			},
			{
				heading: "Safe Downloads",
				content: "Only download files from websites you trust. Scan downloaded files with antivirus software before opening. Be especially careful with executable files (.exe, .dmg, .app). If a website unexpectedly tries to download something, cancel it immediately."
			},
			{
				heading: "Managing Browser Security",
				content: "Keep your browser updated for the latest security fixes. Review installed extensions and remove any you don't recognize or use. Enable pop-up blocking. Consider using a content blocker to reduce exposure to malicious ads. Clear browsing data periodically."
			},
			{
				heading: "Public Wi-Fi Safety",
				content: "Public Wi-Fi networks (cafes, hotels, airports) are convenient but risky. Avoid accessing sensitive accounts or making purchases on public Wi-Fi. If you must use public networks, use a VPN to encrypt your connection. Disable auto-connect to open Wi-Fi networks."
			}
		]
	},

	// ==========================================
	// ADVANCED TOPICS (Uncharted Waters)
	// ==========================================
	{
		id: 25,
		title: "Understanding BIOS/UEFI",
		description: "Your computer's startup system",
		category: "Advanced Topics",
		difficultyLevel: "Uncharted Waters",
		sections: [
			{
				heading: "What is BIOS/UEFI?",
				content: "BIOS (Basic Input/Output System) and its modern replacement UEFI (Unified Extensible Firmware Interface) are firmware that start your computer before the operating system loads. They initialize hardware, run basic diagnostics, and hand control to your operating system. UEFI is faster, more secure, and supports modern features."
			},
			{
				heading: "Accessing BIOS/UEFI",
				content: "Press a specific key during startup to enter BIOS/UEFI setup. Common keys include Delete, F2, F10, F12, or Escape - it varies by manufacturer. Look for a brief message on screen during boot. On Windows 11, you can also restart from Settings > System > Recovery > Advanced startup."
			},
			{
				heading: "Common BIOS/UEFI Settings",
				content: "Boot order determines which device your computer tries to start from first (hard drive, USB, DVD). Secure Boot helps prevent malware from loading during startup. You can also adjust system date/time, enable/disable hardware components, and configure memory settings. Be careful - incorrect changes can prevent your computer from starting."
			},
			{
				heading: "When to Use BIOS/UEFI",
				content: "You might need BIOS/UEFI access to boot from a USB drive for installing an operating system. Changing boot order is necessary if your computer starts from the wrong drive. Some advanced troubleshooting requires disabling Secure Boot temporarily. Overclocking and advanced hardware configuration happen here."
			},
			{
				heading: "Safety Considerations",
				content: "Don't change settings you don't understand - wrong settings can prevent booting. Write down original values before making changes. Most BIOS/UEFI systems have a \"Load Defaults\" option to restore safe settings. Keep your BIOS/UEFI updated using your manufacturer's official tools for security fixes."
			}
		]
	},
	{
		id: 26,
		title: "Networking Basics",
		description: "How networks work",
		category: "Advanced Topics",
		difficultyLevel: "Uncharted Waters",
		sections: [
			{
				heading: "What is a Network?",
				content: "A network connects devices so they can communicate and share resources. Your home network connects your computers, phones, printers, and smart devices. The internet is a massive network connecting billions of devices worldwide. Networks can be wired (Ethernet cables) or wireless (Wi-Fi)."
			},
			{
				heading: "Key Network Components",
				content: "A modem connects your home to your internet service provider. A router directs traffic between devices on your network and the internet. Switches connect multiple wired devices. Access points extend Wi-Fi coverage. Many home devices combine modem, router, and access point in one unit."
			},
			{
				heading: "IP Addresses",
				content: "Every device on a network has an IP address - like a street address for data. Private IPs (like 192.168.x.x) identify devices on your local network. Your public IP identifies your network on the internet. Your router translates between private and public addresses using NAT (Network Address Translation)."
			},
			{
				heading: "DNS: The Internet's Phone Book",
				content: "DNS (Domain Name System) translates human-readable addresses (like www.example.com) into IP addresses computers understand. When you type a web address, your device asks DNS servers for the corresponding IP. Changing your DNS servers can improve speed or add security features."
			},
			{
				heading: "Basic Network Troubleshooting",
				content: "If you lose internet, first restart your router and modem. Check if the problem affects all devices or just one. Ping a website (type \"ping google.com\" in Command Prompt or Terminal) to test connectivity. Check your IP configuration with ipconfig (Windows) or ifconfig (Mac). Release and renew your IP address if needed."
			}
		]
	},
	{
		id: 27,
		title: "Building a PC",
		description: "Guide to custom computer builds",
		category: "Advanced Topics",
		difficultyLevel: "Uncharted Waters",
		sections: [
			{
				heading: "Why Build Your Own PC?",
				content: "Building a PC lets you customize exactly what you need and often saves money compared to pre-built systems. You'll understand your hardware better, making upgrades and repairs easier. It's also rewarding to create something powerful with your own hands. Gaming PCs, workstations, and home servers are common DIY projects."
			},
			{
				heading: "Essential Components",
				content: "Every PC needs: a CPU (processor), motherboard, RAM (memory), storage (SSD or HDD), power supply (PSU), and a case. For graphics, you'll use integrated graphics in the CPU or a dedicated GPU. You'll also need a CPU cooler (some CPUs include one). All components must be compatible with each other."
			},
			{
				heading: "Component Compatibility",
				content: "The CPU must match the motherboard socket type (AMD uses AM5, Intel uses LGA 1700 for current generations). RAM must match motherboard specifications (DDR4 vs DDR5). The power supply must provide enough wattage for all components. The case must fit your motherboard size (ATX, Micro-ATX, Mini-ITX). Use PC Part Picker websites to check compatibility."
			},
			{
				heading: "The Building Process",
				content: "Work on a clean, static-free surface. Install the CPU into the motherboard first, then the cooler and RAM. Mount the motherboard in the case. Connect the power supply and route cables. Install storage drives and the graphics card. Connect front panel cables (power button, USB). Double-check all connections before powering on."
			},
			{
				heading: "After the Build",
				content: "Enter BIOS to verify all components are detected. Install your operating system from a USB drive. Install motherboard drivers for full functionality. Update the graphics card drivers. Run stress tests to ensure stability. Monitor temperatures to confirm adequate cooling. Enjoy your custom-built computer!"
			}
		]
	},
	{
		id: 28,
		title: "Command Line Basics",
		description: "Introduction to terminal commands",
		category: "Advanced Topics",
		difficultyLevel: "Uncharted Waters",
		sections: [
			{
				heading: "What is the Command Line?",
				content: "The command line (Terminal on Mac, Command Prompt or PowerShell on Windows) is a text-based interface for controlling your computer. Instead of clicking icons, you type commands. While it looks intimidating, it's powerful for automation, troubleshooting, and tasks that are tedious with a mouse."
			},
			{
				heading: "Opening the Command Line",
				content: "On Windows, search for \"Command Prompt\" or \"PowerShell\" in the Start menu. On Mac, find Terminal in Applications > Utilities, or search for it with Spotlight. You'll see a prompt waiting for your input - usually showing your username and current directory."
			},
			{
				heading: "Navigation Commands",
				content: "Use \"cd\" (change directory) to move between folders: \"cd Documents\" enters the Documents folder. \"cd ..\" goes up one level. \"dir\" (Windows) or \"ls\" (Mac) lists files in the current folder. \"pwd\" (Mac) or \"cd\" alone (Windows) shows your current location. Use Tab to autocomplete file and folder names."
			},
			{
				heading: "File Operations",
				content: "Create folders with \"mkdir foldername\". Delete files with \"del filename\" (Windows) or \"rm filename\" (Mac). Copy files with \"copy\" (Windows) or \"cp\" (Mac). Move files with \"move\" (Windows) or \"mv\" (Mac). View text files with \"type filename\" (Windows) or \"cat filename\" (Mac)."
			},
			{
				heading: "Useful Commands",
				content: "\"ping google.com\" tests internet connectivity. \"ipconfig\" (Windows) or \"ifconfig\" (Mac) shows network information. \"systeminfo\" (Windows) displays system details. Use the up arrow to repeat previous commands. Type \"help\" (Windows) or \"man commandname\" (Mac) to learn about commands. Start simple and gradually explore more advanced options."
			}
		]
	},
	{
		id: 29,
		title: "Troubleshooting",
		description: "Diagnosing and fixing common issues",
		category: "Advanced Topics",
		difficultyLevel: "Uncharted Waters",
		sections: [
			{
				heading: "The Troubleshooting Mindset",
				content: "Good troubleshooting is systematic. Start with the most likely and simplest causes. Change one thing at a time so you know what fixed the problem. Take notes on what you've tried. Don't panic - most problems have solutions. Search online using exact error messages for specific help."
			},
			{
				heading: "The Universal First Step",
				content: "Restart the device. This classic advice works because many problems are caused by software that's gotten into a bad state. Restarting clears memory and reloads everything fresh. For network issues, restart your router too. Give devices a full minute off before restarting."
			},
			{
				heading: "Computer Won't Start",
				content: "Check power connections first - is it plugged in, is the outlet working? Listen for fans or beeps that indicate partial startup. For laptops, try removing the battery and running on power adapter only. If you see a black screen but hear the computer running, the display might be the issue - try connecting an external monitor."
			},
			{
				heading: "Slow Performance",
				content: "Check how much of your RAM and disk are in use (Task Manager on Windows, Activity Monitor on Mac). Close programs you're not using. Check for malware with your antivirus. Insufficient storage space can cause slowdowns - aim for 10-15% free. Consider whether the slowdown is recent (suggesting a new problem) or gradual (suggesting aging hardware)."
			},
			{
				heading: "Software Crashes",
				content: "Update the software to the latest version. Update your operating system. Try uninstalling and reinstalling the program. Check if other users report similar issues online. Look at crash logs for clues (Event Viewer on Windows, Console on Mac). As a last resort, try running the software in compatibility mode or safe mode."
			},
			{
				heading: "When to Seek Help",
				content: "If you've tried multiple solutions without success, it's okay to ask for help. Document what you've tried - this helps others help you faster. Hardware issues often require professional repair. Data recovery from failing drives should be handled by professionals. When in doubt, back up your important files before attempting risky fixes."
			}
		]
	}
];

export default tutorials;
