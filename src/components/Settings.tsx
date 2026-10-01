import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', label: 'عمومی', icon: '⚙️' },
    { id: 'notifications', label: 'اعلانات', icon: '🔔' },
    { id: 'security', label: 'امنیت', icon: '🔒' },
    { id: 'organization', label: 'سازمان', icon: '🏢' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">تنظیمات سامانه</h1>
        <p className="text-gray-500 text-sm mt-1">مدیریت تنظیمات و پیکربندی سیستم</p>
      </div>

      {/* Section Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeSection === section.id
                ? 'bg-gradient-to-l from-blue-500 to-indigo-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        {activeSection === 'general' && (
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 pb-3 border-b border-gray-100">تنظیمات عمومی</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نام سازمان</label>
                <input type="text" defaultValue="شرکت فناوری اطلاعات پارس" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">زبان پیش‌فرض</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400">
                  <option>فارسی</option>
                  <option>English</option>
                  <option>العربية</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تقویم</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400">
                  <option>شمسی</option>
                  <option>میلادی</option>
                  <option>قمری</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">منطقه زمانی</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400">
                  <option>Asia/Tehran (UTC+3:30)</option>
                  <option>Asia/Dubai (UTC+4:00)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ساعت کاری شروع</label>
                <input type="text" defaultValue="۰۸:۰۰" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ساعت کاری پایان</label>
                <input type="text" defaultValue="۱۷:۰۰" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 pb-3 border-b border-gray-100">تنظیمات اعلانات</h3>
            <div className="space-y-4">
              {[
                { label: 'اعلان درخواست مرخصی جدید', description: 'دریافت اعلان هنگام ثبت درخواست مرخصی' },
                { label: 'اعلان ورود و خروج', description: 'ثبت خودکار ورود و خروج کارکنان' },
                { label: 'اعلان سررسید قرارداد', description: 'هشدار قبل از پایان قرارداد کارکنان' },
                { label: 'اعلان پرداخت حقوق', description: 'یادآوری زمان پرداخت حقوق ماهانه' },
                { label: 'اعلان تولد کارکنان', description: 'یادآوری تاریخ تولد کارکنان' },
                { label: 'گزارش هفتگی', description: 'ارسال خلاصه عملکرد هفتگی' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={index < 4} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'security' && (
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 pb-3 border-b border-gray-100">تنظیمات امنیتی</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور فعلی</label>
                <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور جدید</label>
                <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تکرار رمز عبور جدید</label>
                <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-800">احراز هویت دو مرحله‌ای</p>
                  <p className="text-xs text-gray-500 mt-0.5">افزایش امنیت حساب کاربری</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-800">قفل خودکار پس از ۱۵ دقیقه</p>
                  <p className="text-xs text-gray-500 mt-0.5">خروج خودکار در صورت عدم فعالیت</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'organization' && (
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 pb-3 border-b border-gray-100">اطلاعات سازمان</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نام شرکت</label>
                <input type="text" defaultValue="شرکت فناوری اطلاعات پارس" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">شناسه ملی</label>
                <input type="text" defaultValue="۱۰۱۰۲۳۴۵۶۷۸" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">آدرس</label>
                <input type="text" defaultValue="تهران، خیابان ولیعصر، پلاک ۱۲۳" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تلفن</label>
                <input type="text" defaultValue="۰۲۱-۸۸۷۷۶۶۵۵" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل سازمانی</label>
                <input type="email" defaultValue="info@pars-tech.ir" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وب‌سایت</label>
                <input type="text" defaultValue="www.pars-tech.ir" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" />
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-3">
          <button className="bg-gradient-to-l from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/20">
            ذخیره تغییرات
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all">
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
