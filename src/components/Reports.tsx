import React from 'react';

const Reports: React.FC = () => {
  const monthlyData = [
    { month: 'فروردین', employees: 235, attendance: 94, turnover: 2.1 },
    { month: 'اردیبهشت', employees: 238, attendance: 92, turnover: 1.8 },
    { month: 'خرداد', employees: 240, attendance: 95, turnover: 1.5 },
    { month: 'تیر', employees: 242, attendance: 91, turnover: 2.3 },
    { month: 'مرداد', employees: 244, attendance: 93, turnover: 1.9 },
    { month: 'شهریور', employees: 245, attendance: 96, turnover: 1.2 },
    { month: 'مهر', employees: 247, attendance: 94, turnover: 1.7 },
    { month: 'آبان', employees: 248, attendance: 93, turnover: 2.0 },
  ];

  const reportTypes = [
    { title: 'گزارش حضور و غیاب ماهانه', description: 'خلاصه حضور کارکنان در ماه جاری', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { title: 'گزارش حقوق و دستمزد', description: 'جزئیات پرداخت‌های ماهانه', icon: '💰', color: 'from-emerald-500 to-emerald-600' },
    { title: 'گزارش مرخصی‌ها', description: 'آمار مرخصی‌های استفاده شده', icon: '📅', color: 'from-purple-500 to-purple-600' },
    { title: 'گزارش عملکرد کارکنان', description: 'ارزیابی عملکرد فصلی', icon: '⭐', color: 'from-amber-500 to-orange-500' },
    { title: 'گزارش جذب و استخدام', description: 'آمار فرآیند استخدام', icon: '👤', color: 'from-pink-500 to-rose-500' },
    { title: 'گزارش آموزش', description: 'دوره‌های آموزشی برگزار شده', icon: '📚', color: 'from-teal-500 to-cyan-500' },
  ];

  const maxEmployees = Math.max(...monthlyData.map(d => d.employees));

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">گزارشات و آمار</h1>
        <p className="text-gray-500 text-sm mt-1">تحلیل و بررسی عملکرد سازمان</p>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {reportTypes.map((report, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                {report.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{report.title}</h3>
                <p className="text-xs text-gray-500">{report.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] text-gray-400">آخرین بروزرسانی: ۱۴۰۳/۱۰/۱۰</span>
              <button className="text-xs text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1">
                مشاهده
                <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Growth Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            رشد تعداد کارکنان
          </h3>
          <div className="flex items-end gap-3 h-48">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-[10px] text-gray-500 font-medium">{data.employees}</span>
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${(data.employees / maxEmployees) * 100}%` }}
                ></div>
                <span className="text-[9px] text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Rate Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            نرخ حضور ماهانه (%)
          </h3>
          <div className="space-y-3">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-16">{data.month}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-emerald-400 to-emerald-500 rounded-full flex items-center justify-end px-2 transition-all duration-500"
                    style={{ width: `${data.attendance}%` }}
                  >
                    <span className="text-[10px] text-white font-bold">{data.attendance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Turnover Rate */}
      <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          نرخ ترک خدمت ماهانه (%)
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {monthlyData.map((data, index) => (
            <div key={index} className="text-center">
              <div className={`w-full aspect-square rounded-xl flex items-center justify-center mb-2 ${
                data.turnover > 2 ? 'bg-red-50 border border-red-200' : data.turnover > 1.5 ? 'bg-amber-50 border border-amber-200' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <span className={`text-sm font-bold ${
                  data.turnover > 2 ? 'text-red-600' : data.turnover > 1.5 ? 'text-amber-600' : 'text-emerald-600'
                }`}>{data.turnover}%</span>
              </div>
              <span className="text-[9px] text-gray-400">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
