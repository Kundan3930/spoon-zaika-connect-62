
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
  { id: '001', customer: 'Kundan Patel', restaurant: 'Spoon', items: 'Classic Burger x 2', status: 'Pending', date: '2023-05-01', total: '₹140' },
  { id: '002', customer: 'Aashish Yadav', restaurant: 'Zaika', items: 'Butter Chicken x 1, Naan x 2', status: 'Preparing', date: '2023-05-03', total: '₹140' },
  { id: '003', customer: 'Virat', restaurant: 'Spoon', items: 'Caesar Salad x 1', status: 'Ready', date: '2023-05-05', total: '₹60' },
  { id: '004', customer: 'Suresh Yadav', restaurant: 'Zaika', items: 'Chicken Biryani x 1', status: 'Delivered', date: '2023-05-07', total: '₹170' },
  { id: '005', customer: 'Arshit Raj', restaurant: 'Spoon', items: 'Fries x 2, Soda x 1', status: 'Pending', date: '2023-05-08', total: '₹160' },
];

// Mock menu data
const initialMenuItems = [
  { id: '001', name: 'Classic Burger', restaurant: 'Spoon', price: '₹70', available: true },
  { id: '002', name: 'Caesar Salad', restaurant: 'Spoon', price: '₹60', available: true },
  { id: '003', name: 'Fries', restaurant: 'Spoon', price: '70₹', available: true },
  { id: '004', name: 'Butter Chicken', restaurant: 'Zaika', price: '₹120', available: true },
  { id: '005', name: 'Chicken Biryani', restaurant: 'Zaika', price: '₹170', available: true },
  { id: '006', name: 'Naan', restaurant: 'Zaika', price: '₹60', available: true },
];

// Mock users data
const initialUsers = [
  { id: '001', name: 'kundan', email: 'kundan@example.com', orders: 5, lastOrder: '2023-05-01' },
  { id: '002', name: 'Arshit', email: 'arshit@example.com', orders: 3, lastOrder: '2023-05-03' },
  { id: '003', name: 'Suresh', email: 'suresh@example.com', orders: 2, lastOrder: '2023-05-05' },
  { id: '004', name: 'Aashish', email: 'aashish@example.com', orders: 1, lastOrder: '2023-05-07' },
  { id: '005', name: 'Murad', email: 'murad@example.com', orders: 6, lastOrder: '2023-05-08' },
];

const AdminDashboard = () => {
  const { user, logout, restaurantType } = useAuth();
  const [orders, setOrders] = useState(initialOrders);
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [users, setUsers] = useState(initialUsers);
  const [activeTab, setActiveTab] = useState('orders');
  const [newMenuItem, setNewMenuItem] = useState({ name: '', price: '', available: true });
  
  // Filter orders based on admin's restaurant
  const filteredOrders = orders.filter(order => {
    if (!restaurantType) return true;
    return order.restaurant.toLowerCase() === restaurantType;
  });
  
  // Filter menu items based on admin's restaurant
  const filteredMenuItems = menuItems.filter(item => {
    if (!restaurantType) return true;
    return item.restaurant.toLowerCase() === restaurantType;
  });
  
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };
  
  const toggleMenuItemAvailability = (itemId: string) => {
    setMenuItems(menuItems.map(item => 
      item.id === itemId ? {...item, available: !item.available} : item
    ));
    const targetItem = menuItems.find(item => item.id === itemId);
    if (targetItem) {
      const newStatus = !targetItem.available ? 'available' : 'unavailable';
      toast.success(`${targetItem.name} is now ${newStatus}`);
    }
  };
  
  const addMenuItem = () => {
    if (!newMenuItem.name || !newMenuItem.price) {
      toast.error('Please provide both name and price');
      return;
    }
    
    const newItem = {
      id: (Math.random() * 1000).toFixed(0).padStart(3, '0'),
      name: newMenuItem.name,
      restaurant: restaurantType as string,
      price: newMenuItem.price.startsWith('₹') ? newMenuItem.price : `${newMenuItem.price}`,
      available: newMenuItem.available
    };
    
    setMenuItems([...menuItems, newItem]);
    setNewMenuItem({ name: '', price: '', available: true });
    toast.success(`${newItem.name} added to menu`);
  };

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
            <p className="text-blue-200 mt-1">
              {restaurantType ? `${restaurantType.charAt(0).toUpperCase() + restaurantType.slice(1)} Dashboard` : 'Dashboard'}
            </p>
          </div>
          <nav className="mt-6">
            <div className="px-4">
              <button 
                className={`w-full flex items-center px-4 py-3 ${activeTab === 'orders' ? 'bg-blue-900' : 'text-blue-200 hover:bg-blue-700'} rounded-lg`}
                onClick={() => setActiveTab('orders')}
              >
                <span>Orders</span>
              </button>
              <button 
                className={`w-full flex items-center px-4 py-3 mt-1 ${activeTab === 'menu' ? 'bg-blue-900' : 'text-blue-200 hover:bg-blue-700'} rounded-lg`}
                onClick={() => setActiveTab('menu')}
              >
                <span>Menu Items</span>
              </button>
              <button 
                className={`w-full flex items-center px-4 py-3 mt-1 ${activeTab === 'users' ? 'bg-blue-900' : 'text-blue-200 hover:bg-blue-700'} rounded-lg`}
                onClick={() => setActiveTab('users')}
              >
                <span>Users</span>
              </button>
              <button 
                className={`w-full flex items-center px-4 py-3 mt-1 ${activeTab === 'settings' ? 'bg-blue-900' : 'text-blue-200 hover:bg-blue-700'} rounded-lg`}
                onClick={() => setActiveTab('settings')}
              >
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
              <h1 className="text-2xl font-semibold text-gray-800">
                {activeTab === 'orders' ? 'Orders Dashboard' : 
                 activeTab === 'menu' ? 'Menu Management' :
                 activeTab === 'users' ? 'User Management' : 'Settings'}
              </h1>
              <div className="md:hidden">
                <Button variant="outline" onClick={() => logout()}>
                  Sign Out
                </Button>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <Table>
                  <TableCaption>
                    {restaurantType 
                      ? `Orders from ${restaurantType}` 
                      : 'All orders'}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
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
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium mb-2">Pending Orders</h3>
                    <p className="text-3xl font-bold">
                      {filteredOrders.filter(order => order.status === 'Pending').length}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium mb-2">Processing Orders</h3>
                    <p className="text-3xl font-bold">
                      {filteredOrders.filter(order => order.status === 'Preparing').length}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium mb-2">Completed Today</h3>
                    <p className="text-3xl font-bold">
                      {filteredOrders.filter(order => order.status === 'Delivered').length}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Menu Items Tab */}
            {activeTab === 'menu' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6 p-4 border rounded-md bg-gray-50">
                  <h3 className="font-medium mb-3">Add New Menu Item</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={newMenuItem.name}
                        onChange={(e) => setNewMenuItem({...newMenuItem, name: e.target.value})}
                        placeholder="e.g. Vegetable Curry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={newMenuItem.price}
                        onChange={(e) => setNewMenuItem({...newMenuItem, price: e.target.value})}
                        placeholder="e.g. 9.99"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={addMenuItem} className="w-full">Add Item</Button>
                    </div>
                  </div>
                </div>
                
                <Table>
                  <TableCaption>Menu Items for {restaurantType}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMenuItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.available ? 'Available' : 'Unavailable'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant={item.available ? "destructive" : "default"}
                            size="sm"
                            onClick={() => toggleMenuItemAvailability(item.id)}
                          >
                            {item.available ? 'Mark Unavailable' : 'Mark Available'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            
            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <Table>
                  <TableCaption>Customer Information</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Last Order</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.orders}</TableCell>
                        <TableCell>{user.lastOrder}</TableCell>
                        <TableCell>
                          <Button size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Restaurant Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Restaurant Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          defaultValue={restaurantType ? restaurantType.charAt(0).toUpperCase() + restaurantType.slice(1) : ''}
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full p-2 border rounded-md"
                          defaultValue={user?.email}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time</label>
                        <input
                          type="time"
                          className="w-full p-2 border rounded-md"
                          defaultValue="08:00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time</label>
                        <input
                          type="time"
                          className="w-full p-2 border rounded-md"
                          defaultValue="20:00"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">
                          Email notifications for new orders
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-900">
                          SMS notifications for new orders
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Save Changes</Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
