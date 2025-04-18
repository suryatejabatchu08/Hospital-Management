# Hospital Management System

**DocHub** is a comprehensive Hospital Management System that streamlines hospital-patient interactions through a user-friendly web platform. Built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL, this project allows patients to manage appointments, consultations, medicine orders, and even analyze medicine information with image uploads using the Gemini API.

## Features

### 1. **User Registration & Login**
- Secure authentication for patients.
- User credentials and profile information stored in the `dochub` MySQL database.

### 2. **Appointment & Video Consultation**
- Book in-person or video consultations with doctors.
- Schedule and view appointments from the dashboard.

### 3. **Online Medicine Ordering**
- Browse and order medicines online.
- Orders are stored in the `orders` and `order_items` tables.
- "My Orders" page includes downloadable/printable receipts.

### 4. **Medicine Analyzer**
- Upload an image of any medicine.
- Get information such as:
  - Uses
  - Side effects
- Powered by Gemini API for medicine image recognition and analysis.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: PHP
- **Database**: MySQL (`dochub`)
- **External API**: Gemini (for medicine analysis via image upload)

## Database Structure

The application uses a MySQL database named `dochub` with the following key tables:

- `users`: Stores login credentials and roles.
- `user_details`: Stores detailed patient information.
- `medicines`: Contains medicine details (name, use, price, etc.).
- `orders`: Stores order details such as user ID and order date.
- `order_items`: Contains items associated with each order.
- Additional supporting tables for appointment and consultation management.

## Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/suryatejabatchu08/Hospital-Management.git
```

### Step 2. Set Up the Database
- Open phpMyAdmin or any MySQL GUI.

- Create a new database named (`dochub`).

- Import the SQL file if available, or manually create the required tables:

  - (`users`)

  - (`user_details`)

  - (`medicines`)

  - (`orders`)

  - (`order_items`)

### Step 3. Place Project in Web Server Directory
- If using XAMPP, move the project folder to:
```bash
C:\xampp\htdocs\Hospital-Management-System
```
- If using WAMP, place it in:
```bash
C:\wamp64\www\Hospital-Management-System
```
### Step 4. Start Apache and MySQL
- Open the XAMPP or WAMP control panel.

- Start the following services:

  - Apache

  - MySQL

### Step 5. Access the Application
- Open your web browser and go to:

```bash
http://localhost/Hospital-Management
```
- Register a new account and start using the system.

### Step 6. Configure Gemini API for Medicine Analyzer
- Visit Gemini and get your API key.

- Locate the PHP script that handles the medicine analysis (`medprocess.php`).

- Insert your API key in the appropriate place inside the script to enable functionality.
