
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { Plus, Minus } from 'lucide-react';

export interface FoodItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantName: string;
}

const FoodItem = ({ id, name, description, price, image, restaurantName }: FoodItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showDialog, setShowDialog] = useState(false);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleOrder = () => {
    setShowDialog(true);
  };

  const handleConfirmOrder = () => {
    // In a real app, this would send the order to a backend
    toast.success(`Order placed: ${quantity}x ${name} from ${restaurantName}`);
    setShowDialog(false);
    setQuantity(1);
    
    // Simulate sending to admin
    setTimeout(() => {
      console.log(`Order sent to ${restaurantName} admin: ${quantity}x ${name}`);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg animate-fade-up border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">${price.toFixed(2)}</span>
          <Button onClick={handleOrder} className="btn-hover">Order</Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order {name}</DialogTitle>
            <DialogDescription>
              Select quantity to order from {restaurantName}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col space-y-4 py-4">
            <div className="mx-auto">
              <img src={image} alt={name} className="w-32 h-32 object-cover rounded-md" />
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleDecrement}
                disabled={quantity === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 text-center"
                min={1}
              />
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleIncrement}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              Total: ${(price * quantity).toFixed(2)}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoodItem;
