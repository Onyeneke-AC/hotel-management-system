import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";
import Guests from "./pages/Guests";
import Guest from "./pages/Guest";
import { UserDetailsProvider } from "./context/UserDetailsContext";
import { DateFilterBookingsProvider } from "./context/DateFilterBookings";
import ProtectedRoute from "./ui/ProtectedRoute";
import { ExportDateProvider } from "./context/ExportDate";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <ExportDateProvider>
      <UserDetailsProvider>
        <DateFilterBookingsProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route
                    path="booking/:bookingId/:roomBookingId"
                    element={<Booking />}
                  />
                  <Route path="guest/:guestId" element={<Guest />} />
                  <Route path="rooms" element={<Rooms />} />
                  <Route path="users" element={<Users />} />
                  <Route path="guests" element={<Guests />} />
                  <Route path="account" element={<Account />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-center"
              gutter={10}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </QueryClientProvider>
        </DateFilterBookingsProvider>
      </UserDetailsProvider>
    </ExportDateProvider>
  );
}

export default App;
