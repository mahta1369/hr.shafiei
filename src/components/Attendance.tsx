import React, { useState } from 'react';

const Attendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('۱۴۰۳/۱۰/۱۰');

  const attendanceData = [
    { name: 'علی محمدی', department: 'فناوری اطلاعات', checkIn: '۰۸:۰۲', checkOut: '۱۷:۱۵', status: 'present', hours: '۹:۱۳' },
    { name: 'مریم احمدی', department: 'مالی', checkIn: '۰۷:۵۵', checkOut: '۱۷:۰۰', status: 'present', hours: '۹:۰۵' },
    { name: 'رضا کریمی', department: 'فروش', checkIn: '-', checkOut: '-', status: 'leave', hours: '-' },
    { name: 'فاطمه نوری', department: 'فناوری اطلاعات', checkIn: '۰۸:۱۰', checkOut: '۱۷:۳۰', status: 'present', hours: '۹:۲۰' },
    { name: 'حسین رضایی', department: 'تولید', checkIn: '۰۶:۴۵', checkOut: '۱۵:۰۰', status: 'present', hours: '۸:۱۵' },
    { name: 'زهرا موسوی', department: 'منابع انسانی', checkIn: '۰۸:۳۰', checkOut: '-', status: 'late', hours: '-' },
    { name: 'محمد حسینی', department: 'فناوری اطلاعات', checkIn: '-', checkOut: '-', status: 'absent', hours: '-' },
    { name: 'سارا عباسی', department: 'بازاریابی', checkIn: '۰۸:۰۰', checkOut: '۱۷:۰۵', status: 'present', hours: '۹:۰۵' },
    { name: 'امیر جعفری', department: 'تولید', checkIn: '۰۶:۵۰', checkOut: '۱۵:۱۰', status: 'present', hours: '۸:۲۰' },
    { name: 'نرگس صادقی', department: 'پشتیبانی', checkIn: '-', checkOut: '-', status: 'leave', hours: '-' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present': return <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">حاضر</span>;
      case 'absent': return <span className="px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">غایب</span>;
      case 'late': return <span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">تأخیر</span>;
      case 'leave': return <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">مرخصی</span>;
      default: return null;
    }
  };

  const summaryStats = [
    { label: 'حاضر', count: '۶', color: 'bg-emerald-500', icon: '✅' },
    { label: 'غایب', count: '۱', color: 'bg-red-500', icon: '❌' },
    { label: 'تأخیر', count: '۱', color: 'bg-amber-500', icon: '⏰' },
    { label: 'مرخصی', count: '۲', color: 'bg-blue-500', icon: '🏖️' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">حضور و غیاب</h1>
          <p className="text-gray-500 text-sm mt-1">مدیریت و پیگیری حضور کارکنان</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
          />
          <button className="flex items-center gap-2 bg-gradient-to-l from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            خروجی اکسل
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {summaryStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center text-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{stat.count}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">ردیف</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">نام کارمند</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">بخش</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">ساعت ورود</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">ساعت خروج</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">مدت کار</th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-gray-600">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="py-3.5 px-5 text-sm text-gray-500">{index + 1}</td>
                  <td className="py-3.5 px-5 text-sm font-medium text-gray-800">{record.name}</td>
                  <td className="py-3.5 px-5 text-sm text-gray-500">{record.department}</td>
                  <td className="py-3.5 px-5 text-sm text-gray-600 font-mono" dir="ltr">{record.checkIn}</td>
                  <td className="py-3.5 px-5 text-sm text-gray-600 font-mono" dir="ltr">{record.checkOut}</td>
                  <td className="py-3.5 px-5 text-sm text-gray-600 font-mono" dir="ltr">{record.hours}</td>
                  <td className="py-3.5 px-5">{getStatusBadge(record.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
