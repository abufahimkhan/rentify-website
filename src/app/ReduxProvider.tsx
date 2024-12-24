// ClientProviders.tsx
"use client";

import { Provider } from "react-redux";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { store } from "@/components/redux/store";
interface ReduxPropsTypes {
  children: React.ReactNode;
}
const ReduxProvider: React.FC<ReduxPropsTypes> = ({ children }) => {
  return (
    <Provider store={store}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </Provider>
  );
};

export default ReduxProvider;
