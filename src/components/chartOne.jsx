import { useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import ChartFilter from "./ChartFilter";

export default function ChartOne() {
  const [state, setState] = useState({
    series: [
      {
        name: "Users visited app",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
      {
        name: "Total Users",
        data: [40, 50, 55, 65, 75, 85, 90, 100, 110, 120, 130, 140],
      },
    ],
  });

  const options = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3b82f6", "#ef4444"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#3b82f6",
        top: 40,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#3b82f6", "#ef4444"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 150, 
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-xl sm:px-7">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold">Reports</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-slate-100 p-1.5">
            <button className="rounded py-1 px-3 text-xs font-medium text-gray-500 shadow-card hover:bg-white hover:shadow">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-gray-500 hover:bg-white hover:shadow">
              Week
            </button>
            <button className="rounded bg-white shadow py-1 px-3 text-xs font-medium text-gray-500 hover:bg-white hover:shadow">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="ml-0">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
