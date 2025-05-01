
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for demonstration
const initialOrders = [
  { id: '001', customer: 'John Doe', restaurant: 'Spoon', items: 'Classic Burger x 2', status: 'Pending', date: '2023-05-01', total: '$15.98' },
  { id: '002', customer: 'Alice Smith', restaurant: 'Zaika', items: 'Butter Chicken x 1, Naan x 2', status: 'Preparing', date: '2023-05-03', total: '$22.50' },
  { id: '003', customer: 'Bob Johnson', restaurant: 'Spoon', items: 'Caesar Salad x 1', status: 'Ready', date: '2023-05-05', total: '$8.99' },
  { id: '004', customer: 'Eva Brown', restaurant: 'Zaika', items: 'Chicken Biryani x 1', status: 'Delivered', date: '2023-05-07', total: '$14.50' },
  { id: '005', customer: 'Michael Lee', restaurant: 'Spoon', items: 'Fries x 2, Soda x 1', status: 'Pending', date: '2023-05-08', total: '$9.99' },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState('all');
  
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.restaurant.toLowerCase() === activeTab);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100"
    >
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-blue-800 text-white">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold">QuickBite Admin</h1>
            <p className="text-blue-200 mt-1">Dashboard</p>
          </div>
          <nav className="mt-6">
            <div className="px-4">
              <button className="w-full flex items-center px-4 py-3 bg-blue-900 rounded-lg">
                <span>Orders</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-lg mt-1">
                <span>Menu Items</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-lg mt-1">
                <span>Users</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-lg mt-1">
                <span>Settings</span>
              </button>
            </div>
          </nav>
          <div className="mt-auto px-6 py-4">
            <p className="text-sm text-blue-200">Signed in as:</p>
            <p className="font-medium">{user?.email}</p>
            <button 
              onClick={() => logout()}
              className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <header className="bg-white shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">Orders Dashboard</h1>
              <div className="md:hidden">
                <Button variant="outline" onClick={() => logout()}>
                  Sign Out
                </Button>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="all">All Orders</TabsTrigger>
                  <TabsTrigger value="spoon">Spoon</TabsTrigger>
                  <TabsTrigger value="zaika">Zaika</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab}>
                  <Table>
                    <TableCaption>{activeTab === 'all' ? 'All orders' : `Orders from ${activeTab}`}</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Restaurant</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.restaurant}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : order.status === 'Ready' 
                                ? 'bg-blue-100 text-blue-800' 
                                : order.status === 'Preparing'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell>{order.total}</TableCell>
                          <TableCell>
                            <Select
                              value={order.status}
                              onValueChange={(value) => updateOrderStatus(order.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <SelectValue placeholder="Update status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Preparing">Preparing</SelectItem>
                                <SelectItem value="Ready">Ready</SelectItem>
                                <SelectItem value="Delivered">Delivered</SelectItem>
                                <SelectItem value="Cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-2">Pending Orders</h3>
                <p className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Pending').length}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-2">Processing Orders</h3>
                <p className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Preparing').length}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-2">Completed Today</h3>
                <p className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Delivered').length}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
