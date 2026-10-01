import React from 'react';

const Payroll: React.FC = () => {
  const payrollData = [
    { name: 'علی محمدی', position: 'مدیر فنی', baseSalary: 45000000, bonus: 5000000, deductions: 3200000, tax: 4500000, netPay: 42300000, status: 'paid' },
    { name: 'مریم احمدی', position: 'حسابدار ارشد', baseSalary: 35000000, bonus: 3000000, deductions: 2500000, tax: 3200000, netPay: 32300000, status: 'paid' },
    { name: 'رضا کریمی', position: 'کارشناس فروش', baseSalary: 28000000, bonus: 8000000, deductions: 1800000, tax: 2800000, netPay: 31400000, status: 'paid' },
    { name: 'فاطمه نوری', position: 'طراح UI/UX', baseSalary: 32000000, bonus: 2000000, deductions: 2000000, tax: 2900000, netPay: 29100000, status: 'pending' },
    { name: 'حسین رضایی', position: 'مدیر تولید', baseSalary: 40000000, bonus: 4000000, deductions: 2800000, tax: 3800000, netPay: 37400000, status: 'paid' },
    { name: 'زهرا موسوی', position: 'کارشناس HR', baseSalary: 25000000, bonus: 1500000, deductions: 1500000, tax: 2200000, netPay: 22800000, status: 'paid' },
    { name: 'محمد حسینی', position: 'برنامه‌نویس', baseSalary: 30000000, bonus: 2500000, deductions: 2200000, tax: 2700000, netPay: 27600000, status: 'pending' },
    { name: 'سارا عباسی', position: 'کارشناس بازاریابی', baseSalary: 26000000, bonus: 4000000, deductions: 1600000, tax: 2400000, netPay: 26000000, status: 'paid' },
  ];

  const formatNumber = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const totalBaseSalary = payrollData.reduce((sum, emp) => sum + emp.baseSalary, 0);
  const totalBonus = payrollData.reduce((sum, emp) => sum + emp.bonus, 0);
  const totalNetPay = payrollData.reduce((sum, emp) => sum + emp.netPay, 0);
  const paidCount = payrollData.filter(e => e.status === 'paid').length;

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">حقوق و دستمزد</h1>
          <p className="text-gray-500 text-sm mt-1">مدیریت فیش حقوقی کارکنان - مهر ماه ۱۴۰۳</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-medium hover:border-blue-300 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            چاپ فیش
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-l from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            پرداخت حقوق
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
          <p className="text-blue-100 text-sm mb-1">جمع حقوق پایه</p>
          <p className="text-xl font-bold">{formatNumber(totalBaseSalary)}</p>
          <p className="text-blue-200 text-xs mt-1">تومان</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white">
          <p className="text-emerald-100 text-sm mb-1">جمع پاداش‌ها</p>
          <p className="text-xl font-bold">{formatNumber(totalBonus)}</p>
          <p className="text-emerald-200 text-xs mt-1">تومان</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white">
          <p className="text-purple-100 text-sm mb-1">جمع خالص پرداختی</p>
          <p className="text-xl font-bold">{formatNumber(totalNetPay)}</p>
          <p className="text-purple-200 text-xs mt-1">تومان</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 text-white">
          <p className="text-amber-100 text-sm mb-1">وضعیت پرداخت</p>
          <p className="text-xl font-bold">{paidCount} از {payrollData.length}</p>
          <p className="text-amber-200 text-xs mt-1">نفر پرداخت شده</p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">نام کارمند</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">سمت</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">حقوق پایه</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">پاداش</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">کسورات</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">مالیات</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">خالص</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-600">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((emp, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {emp.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{emp.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-sm text-gray-500">{emp.position}</td>
                  <td className="py-3.5 px-4 text-sm text-gray-700 font-mono" dir="ltr">{formatNumber(emp.baseSalary)}</td>
                  <td className="py-3.5 px-4 text-sm text-emerald-600 font-mono" dir="ltr">+{formatNumber(emp.bonus)}</td>
                  <td className="py-3.5 px-4 text-sm text-red-500 font-mono" dir="ltr">-{formatNumber(emp.deductions)}</td>
                  <td className="py-3.5 px-4 text-sm text-orange-500 font-mono" dir="ltr">-{formatNumber(emp.tax)}</td>
                  <td className="py-3.5 px-4 text-sm font-bold text-gray-800 font-mono" dir="ltr">{formatNumber(emp.netPay)}</td>
                  <td className="py-3.5 px-4">
                    {emp.status === 'paid' ? (
                      <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">پرداخت شده</span>
                    ) : (
                      <span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">در انتظار</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
