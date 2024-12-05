# Micro Frontend Project with NGINX

This project demonstrates the implementation of a **Micro Frontend Architecture** using **NGINX** as a reverse proxy to integrate multiple frontend applications into a single cohesive user interface. The goal is to provide an effective way of breaking down large frontend applications into smaller, more manageable, and independently deployable parts.

## Overview

In this project, multiple frontend applications (micro frontends) are integrated using NGINX. Each micro frontend is an isolated part of the user interface, developed, tested, and deployed independently. NGINX serves as the glue to bring these parts together, acting as a reverse proxy and ensuring seamless routing between the different parts of the application.

## Technologies Used

- **NGINX**: Used to configure routing and serve the different micro frontends.
- **VITE**: Used for create one of the applications.
- **NextJS**: Used to demonstrate compatibility with frameworks as well.

## Project Structure

- `/nginx`: Contains the NGINX configuration files for routing the micro frontends.
- `/app1`: Contains the first micro frontend.
- `/app2`: Contains the second micro frontend.

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   docker compose up 