import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'vacation';
  joinDate: string;
  avatar: string;
}

const employeesData: Employee[] = [
  { id: 1, name: 'علی محمدی', position: 'مدیر فنی', department: 'فناوری اطلاعات', email: 'ali@company.ir', phone: '۰۹۱۲۱۲۳۴۵۶۷', status: 'active', joinDate: '۱۳۹۸/۰۳/۱۵', avatar: 'ع' },
  { id: 2, name: 'مریم احمدی', position: 'حسابدار ارشد', department: 'مالی و حسابداری', email: 'maryam@company.ir', phone: '۰۹۱۲۲۳۴۵۶۷۸', status: 'active', joinDate: '۱۳۹۹/۰۶/۲۰', avatar: 'م' },
  { id: 3, name: 'رضا کریمی', position: 'کارشناس فروش', department: 'بازاریابی و فروش', email: 'reza@company.ir', phone: '۰۹۱۲۳۴۵۶۷۸۹', status: 'vacation', joinDate: '۱۴۰۰/۰۱/۱۰', avatar: 'ر' },
  { id: 4, name: 'فاطمه نوری', position: 'طراح UI/UX', department: 'فناوری اطلاعات', email: 'fatemeh@company.ir', phone: '۰۹۱۲۴۵۶۷۸۹۰', status: 'active', joinDate: '۱۴۰۰/۰۷/۰۵', avatar: 'ف' },
  { id: 5, name: 'حسین رضایی', position: 'مدیر تولید', department: 'تولید', email: 'hossein@company.ir', phone: '۰۹۱۲۵۶۷۸۹۰۱', status: 'active', joinDate: '۱۳۹۷/۱۱/۲۵', avatar: 'ح' },
  { id: 6, name: 'زهرا موسوی', position: 'کارشناس منابع انسانی', department: 'منابع انسانی', email: 'zahra@company.ir', phone: '۰۹۱۲۶۷۸۹۰۱۲', status: 'active', joinDate: '۱۴۰۱/۰۲/۱۴', avatar: 'ز' },
  { id: 7, name: 'محمد حسینی', position: 'برنامه‌نویس', department: 'فناوری اطلاعات', email: 'mohammad@company.ir', phone: '۰۹۱۲۷۸۹۰۱۲۳', status: 'inactive', joinDate: '۱۴۰۱/۰۵/۰۸', avatar: 'م' },
  { id: 8, name: 'سارا عباسی', position: 'کارشناس بازاریابی', department: 'بازاریابی و فروش', email: 'sara@company.ir', phone: '۰۹۱۲۸۹۰۱۲۳۴', status: 'active', joinDate: '۱۴۰۲/۰۱/۲۰', avatar: 'س' },
  { id: 9, name: 'امیر جعفری', position: 'مهندس عمران', department: 'تولید', email: 'amir@company.ir', phone: '۰۹۱۲۹۰۱۲۳۴۵', status: 'active', joinDate: '۱۳۹۹/۰۹/۱۲', avatar: 'ا' },
  { id: 10, name: 'نرگس صادقی', position: 'پشتیبان فنی', department: 'پشتیبانی', email: 'narges@company.ir', phone: '۰۹۱۲۰۱۲۳۴۵۶', status: 'vacation', joinDate: '۱۴۰۲/۰۴/۰۱', avatar: 'ن' },
];

const EmployeeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const departments = ['همه بخش‌ها', 'فناوری اطلاعات', 'مالی و حسابداری', 'بازاریابی و فروش', 'منابع انسانی', 'تولید', 'پشتیبانی'];

  const filteredEmployees = employeesData.filter(emp => {
    const matchesSearch = emp.name.includes(searchTerm) || emp.position.includes(searchTerm) || emp.email.includes(searchTerm);
    const matchesDept = filterDepartment === 'all' || emp.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || emp.status === filterStatus;
    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">فعال</span>;
      case 'inactive': return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">غیرفعال</span>;
      case 'vacation': return <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">مرخصی</span>;
      default: return null;
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">مدیریت کارکنان</h1>
          <p className="text-gray-500 text-sm mt-1">لیست و مدیریت اطلاعات کارکنان سازمان</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-l from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          افزودن کارمند
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="جستجوی نام، سمت یا ایمیل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
            />
          </div>
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
          >
            <option value="all">همه بخش‌ها</option>
            {departments.slice(1).map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="inactive">غیرفعال</option>
            <option value="vacation">مرخصی</option>
          </select>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {employee.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{employee.name}</h3>
                  <p className="text-xs text-gray-500">{employee.position}</p>
                </div>
              </div>
              {getStatusBadge(employee.status)}
            </div>
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-left" dir="ltr">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">{employee.phone}</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400">تاریخ استخدام: {employee.joinDate}</span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-amber-50 rounded-lg text-amber-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">افزودن کارمند جدید</h3>
              <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="نام کامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">سمت شغلی</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="سمت" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">بخش</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400">
                    <option>فناوری اطلاعات</option>
                    <option>مالی و حسابداری</option>
                    <option>بازاریابی و فروش</option>
                    <option>منابع انسانی</option>
                    <option>تولید</option>
                    <option>پشتیبانی</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ استخدام</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="۱۴۰۳/۰۱/۰۱" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="email@company.ir" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">شماره تماس</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gradient-to-l from-blue-500 to-indigo-600 text-white py-2.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all">
                ذخیره
              </button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
