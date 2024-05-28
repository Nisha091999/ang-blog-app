# Project Title

This project is an Angular-based web application with Firebase as the backend. It features a blog platform with functionalities such as post categorization, user comments, subscription forms, and more.

## Table of Contents

- [Project Title](#project-title)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive Header and Footer
- Category Navigation Bar
- Home Page displaying posts
- Single Category View
- Single Post View with comments
- Terms and Conditions Page
- Contact Us Page
- Subscription Form
- Comment Form and Comment List
- About Us Page
- Post Cards layout for posts

## Prerequisites

- Node.js and npm installed
- Angular CLI installed
- Firebase account for setting up Firestore

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Angular CLI globally if you haven't already:**
   ```bash
   npm install -g @angular/cli
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

4. **Set up Firebase:**
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Add a web app to the project and get the Firebase configuration
   - Replace the `firebaseConfig` in `src/environments/environment.prod.ts` with your Firebase configuration:
     ```typescript
     export const environment = {
       production: true,
       firebaseConfig: {
         apiKey: "your-api-key",
         authDomain: "your-auth-domain",
         projectId: "your-project-id",
         storageBucket: "your-storage-bucket",
         messagingSenderId: "your-messaging-sender-id",
         appId: "your-app-id"
       }
     };
     ```

## Running the Project

1. **Start the Angular development server:**
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200/`.

## Project Structure

Here is an overview of the project's structure:

```
src/
│
├── app/
│   ├── layouts/
│   │   ├── header/
│   │   ├── category-navbar/
│   │   ├── footer/
│   │   └── post-card/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── single-category/
│   │   ├── single-post/
│   │   ├── terms-and-condition/
│   │   ├── contact-us/
│   │   └── about-us/
│   │
│   ├── comments/
│   │   ├── comment-form/
│   │   └── comment-list/
│   │
│   ├── subscription-form/
│   │
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── ...
│
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
│
└── ...
```

## Technologies Used

- **Frontend:**
  - Angular
  - Angular CLI
  - AngularFire (Angular + Firebase)
  - FormsModule

- **Backend:**
  - Firebase Firestore

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance!
