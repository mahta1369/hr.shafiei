import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'کل کارکنان', value: '۲۴۸', change: '+۱۲', icon: '👥', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { label: 'حاضر امروز', value: '۲۳۱', change: '۹۳%', icon: '✅', color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-50' },
    { label: 'مرخصی امروز', value: '۱۲', change: '-۳', icon: '🏖️', color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-50' },
    { label: 'مأموریت', value: '۵', change: '+۲', icon: '✈️', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
  ];

  const recentActivities = [
    { user: 'علی محمدی', action: 'درخواست مرخصی ثبت کرد', time: '۵ دقیقه پیش', type: 'leave' },
    { user: 'مریم احمدی', action: 'فیش حقوقی دریافت کرد', time: '۱۵ دقیقه پیش', type: 'payroll' },
    { user: 'رضا کریمی', action: 'ورود به سیستم', time: '۳۰ دقیقه پیش', type: 'login' },
    { user: 'فاطمه نوری', action: 'اطلاعات شخصی بروزرسانی شد', time: '۱ ساعت پیش', type: 'update' },
    { user: 'حسین رضایی', action: 'درخواست اضافه‌کار ثبت کرد', time: '۲ ساعت پیش', type: 'overtime' },
    { user: 'زهرا موسوی', action: 'گزارش ماهانه ارسال شد', time: '۳ ساعت پیش', type: 'report' },
  ];

  const departments = [
    { name: 'فناوری اطلاعات', count: 45, percentage: 18 },
    { name: 'مالی و حسابداری', count: 32, percentage: 13 },
    { name: 'بازاریابی و فروش', count: 56, percentage: 23 },
    { name: 'منابع انسانی', count: 18, percentage: 7 },
    { name: 'تولید', count: 67, percentage: 27 },
    { name: 'پشتیبانی', count: 30, percentage: 12 },
  ];

  const upcomingEvents = [
    { title: 'جلسه ارزیابی عملکرد', date: '۱۴۰۳/۱۰/۱۵', type: 'meeting' },
    { title: 'جشن پایان سال', date: '۱۴۰۳/۱۰/۲۸', type: 'event' },
    { title: 'دوره آموزشی مدیریت', date: '۱۴۰۳/۱۰/۲۰', type: 'training' },
    { title: 'مصاحبه استخدامی', date: '۱۴۰۳/۱۰/۱۲', type: 'interview' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">خوش آمدید، مدیر سیستم 👋</h1>
        <p className="text-gray-500 text-sm">خلاصه‌ای از وضعیت امروز سازمان شما</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 animate-slideIn" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-xl shadow-lg`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              فعالیت‌های اخیر
            </h3>
            <button className="text-xs text-blue-500 hover:text-blue-700 font-medium">مشاهده همه</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800">{activity.user}</p>
                  <p className="text-xs text-gray-500 truncate">{activity.action}</p>
                </div>
                <span className="text-[10px] text-gray-400 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              رویدادهای پیش‌رو
            </h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${
                    event.type === 'meeting' ? 'bg-blue-500' :
                    event.type === 'event' ? 'bg-emerald-500' :
                    event.type === 'training' ? 'bg-amber-500' : 'bg-purple-500'
                  }`}></span>
                  <p className="text-sm font-medium text-gray-700">{event.title}</p>
                </div>
                <p className="text-xs text-gray-400 pr-4">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Distribution */}
      <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          توزیع کارکنان در بخش‌ها
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                <span className="text-sm font-bold text-gray-800">{dept.count} نفر</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-l from-blue-500 to-indigo-500 transition-all duration-1000"
                  style={{ width: `${dept.percentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">{dept.percentage}% از کل</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
