"use client";
import {
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";
import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  getDashboardData,
  getPaymentStats,
} from "@/src/actions/payment/payment.action";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [payments, setPayments] = useState({
    success: true || false,
    message: "",
    data: { totalPayments: 0, paymentsPerMonth: [] },
  });
  const [dashboardData, setDashboardData] = useState({
    success: true || false,
    message: "",
    data: {
      activeUsersCount: 0,
      totalPayments: [{ totalAmount: 0 }],
      monthlyActivity: 0,
      monthlyPosts: 0,
    },
  });

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const payments: any = await getPaymentStats();

        if (payments?.success) {
          setPayments(payments);
        }
        const dashboardData: any = await getDashboardData();

        if (dashboardData?.success) {
          setDashboardData(dashboardData);
        }
      } catch (error) {
        console.error("Error fetching payment stats:", error);
      }
    };

    fetchData();
  }, []);
  // Prepare data for the line chart
  const chartData = {
    labels: payments?.data?.paymentsPerMonth.map(
      (monthData: any) => `Month ${monthData._id}`
    ),
    datasets: [
      {
        label: "Monthly Payments",
        data: payments?.data?.paymentsPerMonth.map(
          (monthData: any) => monthData.totalAmount
        ),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.1)",
        fill: true,
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Active Users",
            value: dashboardData?.data?.activeUsersCount,
            icon: <FaUsers />,
          },
          {
            title: "Total Posts",
            value: dashboardData?.data?.monthlyPosts,
            icon: <FaFileAlt />,
          },
          {
            title: "Total Payments",
            value: dashboardData?.data?.totalPayments[0].totalAmount,
            icon: <FaMoneyBillWave />,
          },
          {
            title: "Monthly Activity",
            value: dashboardData?.data?.monthlyActivity,
            icon: <FaChartLine />,
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-200"
          >
            <div className="p-4 flex items-center gap-4">
              <div className="text-4xl text-blue-500">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-lg">{item.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment Overview</h2>
        {chartData.datasets.length ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { color: "#e5e5e5" } },
              },
            }}
          />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
