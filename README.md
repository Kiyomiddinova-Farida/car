# Car Management System

A modern React + Vite + TypeScript application for managing car inventory with full CRUD operations using TanStack Query and a beautiful UI built with Tailwind CSS.

## Features

- ✨ **Full CRUD Operations**: Create, Read, Update, and Delete cars
- 🔍 **Search & Filter**: Search by name, brand, or color, filter by brand
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- ⚡ **Real-time Updates**: TanStack Query for efficient data management
- 🎨 **Modern UI**: Clean and intuitive interface with Tailwind CSS
- 🔒 **Form Validation**: Comprehensive form validation with react-hook-form
- 📊 **Data Persistence**: Connected to Mock API for data storage

## Car Schema

Each car has the following properties:
- **name**: String (minimum 2 characters)
- **price**: Number
- **brand**: String
- **color**: String
- **releaseDate**: String (date)
- **power**: Number (horsepower)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car-front
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application is connected to a Mock API at:
`https://689c865d58a27b18087e8765.mockapi.io/students`

## Project Structure

```
src/
├── components/          # React components
│   ├── CarCard.tsx     # Individual car display card
│   ├── CarForm.tsx     # Form for creating/editing cars
│   └── CarList.tsx     # List of cars with search/filter
├── hooks/              # Custom React hooks
│   └── useCars.ts      # TanStack Query hooks for cars
├── services/           # API services
│   └── carService.ts   # Car API operations
├── types/              # TypeScript type definitions
│   └── car.ts          # Car interface and types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Features in Detail

### Car Management
- **Create**: Add new cars with all required fields
- **Read**: View all cars in a responsive grid layout
- **Update**: Edit existing car information
- **Delete**: Remove cars with confirmation dialog

### Search & Filter
- **Global Search**: Search across car names, brands, and colors
- **Brand Filter**: Filter cars by specific brand
- **Real-time Results**: Instant search results as you type

### User Experience
- **Loading States**: Smooth loading indicators
- **Success/Error Messages**: Toast notifications for all operations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Form Validation**: Client-side validation with helpful error messages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
