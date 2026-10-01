import React, { useState } from 'react';

const LeaveRequests: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const leaveRequests = [
    { id: 1, name: 'رضا کریمی', type: 'استحقاقی', from: '۱۴۰۳/۱۰/۰۸', to: '۱۴۰۳/۱۰/۱۲', days: 5, status: 'approved', reason: 'سفر خانوادگی', department: 'بازاریابی' },
    { id: 2, name: 'نرگس صادقی', type: 'استحقاقی', from: '۱۴۰۳/۱۰/۱۰', to: '۱۴۰۳/۱۰/۱۱', days: 2, status: 'approved', reason: 'امور شخصی', department: 'پشتیبانی' },
    { id: 3, name: 'فاطمه نوری', type: 'بیماری', from: '۱۴۰۳/۱۰/۱۲', to: '۱۴۰۳/۱۰/۱۳', days: 2, status: 'pending', reason: 'کسالت', department: 'فناوری اطلاعات' },
    { id: 4, name: 'سارا عباسی', type: 'استحقاقی', from: '۱۴۰۳/۱۰/۱۵', to: '۱۴۰۳/۱۰/۱۸', days: 4, status: 'pending', reason: 'تفریح', department: 'بازاریابی' },
    { id: 5, name: 'محمد حسینی', type: 'بدون حقوق', from: '۱۴۰۳/۱۰/۰۵', to: '۱۴۰۳/۱۰/۰۷', days: 3, status: 'rejected', reason: 'امور شخصی', department: 'فناوری اطلاعات' },
    { id: 6, name: 'حسین رضایی', type: 'استحقاقی', from: '۱۴۰۳/۱۰/۲۰', to: '۱۴۰۳/۱۰/۲۲', days: 3, status: 'pending', reason: 'عروسی', department: 'تولید' },
    { id: 7, name: 'زهرا موسوی', type: 'زایمان', from: '۱۴۰۳/۱۱/۰۱', to: '۱۴۰۴/۰۱/۳۰', days: 90, status: 'approved', reason: 'مرخصی زایمان', department: 'منابع انسانی' },
    { id: 8, name: 'امیر جعفری', type: 'استحقاقی', from: '۱۴۰۳/۱۰/۰۱', to: '۱۴۰۳/۱۰/۰۲', days: 2, status: 'approved', reason: 'امور اداری', department: 'تولید' },
  ];

  const filteredRequests = leaveRequests.filter(req => 
    filterStatus === 'all' || req.status === filterStatus
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">تأیید شده</span>;
      case 'pending': return <span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">در انتظار</span>;
      case 'rejected': return <span className="px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">رد شده</span>;
      default: return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      'استحقاقی': 'bg-blue-50 text-blue-700',
      'بیماری': 'bg-orange-50 text-orange-700',
      'بدون حقوق': 'bg-gray-100 text-gray-700',
      'زایمان': 'bg-pink-50 text-pink-700',
    };
    return <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${colors[type] || 'bg-gray-100 text-gray-700'}`}>{type}</span>;
  };

  const pendingCount = leaveRequests.filter(r => r.status === 'pending').length;
  const approvedCount = leaveRequests.filter(r => r.status === 'approved').length;
  const rejectedCount = leaveRequests.filter(r => r.status === 'rejected').length;

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">مدیریت مرخصی‌ها</h1>
          <p className="text-gray-500 text-sm mt-1">درخواست‌های مرخصی کارکنان</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-l from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/20">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          درخواست مرخصی جدید
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white text-xl">⏳</div>
          <div>
            <p className="text-2xl font-bold text-amber-700">{pendingCount}</p>
            <p className="text-sm text-amber-600">در انتظار بررسی</p>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">✅</div>
          <div>
            <p className="text-2xl font-bold text-emerald-700">{approvedCount}</p>
            <p className="text-sm text-emerald-600">تأیید شده</p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">❌</div>
          <div>
            <p className="text-2xl font-bold text-red-700">{rejectedCount}</p>
            <p className="text-sm text-red-600">رد شده</p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-6">
        {[
          { value: 'all', label: 'همه' },
          { value: 'pending', label: 'در انتظار' },
          { value: 'approved', label: 'تأیید شده' },
          { value: 'rejected', label: 'رد شده' },
        ].map(filter => (
          <button
            key={filter.value}
            onClick={() => setFilterStatus(filter.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filterStatus === filter.value
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Leave Requests List */}
      <div className="space-y-3">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {request.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 text-sm">{request.name}</h3>
                    {getTypeBadge(request.type)}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{request.department} | {request.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-400">از تاریخ</p>
                  <p className="text-sm font-medium text-gray-700">{request.from}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="text-center">
                  <p className="text-xs text-gray-400">تا تاریخ</p>
                  <p className="text-sm font-medium text-gray-700">{request.to}</p>
                </div>
                <div className="text-center bg-blue-50 rounded-lg px-3 py-1">
                  <p className="text-lg font-bold text-blue-600">{request.days}</p>
                  <p className="text-[10px] text-blue-500">روز</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(request.status)}
                  {request.status === 'pending' && (
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-emerald-600 transition-colors" title="تأیید">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button className="p-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-colors" title="رد">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequests;
