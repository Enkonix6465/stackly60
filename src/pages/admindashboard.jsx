import React from "react";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
const ordersData = [
  { month: "Jan", orders: 1000 },
  { month: "Feb", orders: 1500 },
  { month: "Mar", orders: 2000 },
  { month: "Apr", orders: 2500 },
  { month: "May", orders: 3000 },
  { month: "Jun", orders: 3500 },
  { month: "Jul", orders: 4000 },
  { month: "Aug", orders: 4200 },
  { month: "Sep", orders: 4400 },
  { month: "Oct", orders: 4600 },
  { month: "Nov", orders: 4800 },
  { month: "Dec", orders: 5000 },
];

const categoryData = [
  { name: "Electronics", sales: 3200 },
  { name: "Fashion", sales: 2700 },
  { name: "Home", sales: 2000 },
  { name: "Beauty", sales: 1600 },
  { name: "Sports", sales: 1400 },
  { name: "Books", sales: 1100 },
];


export default function AdminDashboard() {
  const totalUsers = 0;
  return (
    <div className="min-h-screen bg-[#f5f6fa] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Total Users Card */}
        <div className="rounded-2xl shadow-md bg-white border-2 border-red-300 mb-8 flex items-center justify-center h-28">
          <div className="text-center w-full">
            <div className="text-2xl font-semibold text-red-600 mb-1">Total Users</div>
            <div className="text-3xl font-bold text-red-700">{totalUsers}</div>
          </div>
        </div>
        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Orders Delivered Over Time */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200">
            <div className="text-2xl font-bold text-red-600 mb-4">Orders Delivered Over Time</div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={ordersData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#b76e79" strokeWidth={3} fill="#f5c6cb" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Product Category Sales */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200">
            <div className="text-2xl font-bold text-red-600 mb-4">Product Category Sales</div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#b76e79" barSize={40} />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Customer Growth Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200 mb-8">
          <div className="text-2xl font-bold text-red-600 mb-4">Customer Growth</div>
          <div className="text-gray-700">(Add customer growth chart or stats here)</div>
        </div>
      </div>
    </div>
  );
}
