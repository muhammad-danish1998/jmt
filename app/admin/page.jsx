'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  User,
  LogOut,
  Search,
  Download,
  Phone,
  MessageCircle,
  Trash2,
  RefreshCw,
  Eye,
  EyeOff,
  GraduationCap,
  Calendar,
  Filter,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Login Form States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard States
  const [enquiries, setEnquiries] = useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('all');
  const [deletingId, setDeletingId] = useState(null);

  // Check existing session on mount
  useEffect(() => {
    fetchEnquiries(true);
  }, []);

  const fetchEnquiries = async (isInitialCheck = false) => {
    if (!isInitialCheck) setLoadingEnquiries(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      const response = await fetch('/api/admin/enquiries', {
        headers: {
          'x-admin-token': token,
        },
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setEnquiries(data.enquiries || []);
      } else {
        if (!isInitialCheck) setIsAuthenticated(false);
      }
    } catch (err) {
      if (!isInitialCheck) console.error('Fetch enquiries error:', err);
    } finally {
      setCheckingAuth(false);
      setLoadingEnquiries(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== 'undefined' && data.token) {
          localStorage.setItem('admin_token', data.token);
        }
        setIsAuthenticated(true);
        fetchEnquiries();
      } else {
        setLoginError(data.error || 'Invalid Admin ID or Password.');
      }
    } catch (err) {
      setLoginError('Connection error. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token');
    }
    document.cookie = 'admin_auth_token=; path=/; max-age=0';
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this enquiry record?')) return;

    setDeletingId(id);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-token': token,
        },
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setEnquiries((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(data.error || 'Failed to delete record.');
      }
    } catch (err) {
      alert('Error deleting record.');
    } finally {
      setDeletingId(null);
    }
  };

  // Export to CSV Function
  const exportToCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiries to export.');
      return;
    }

    const headers = [
      'Date & Time',
      'Student Name',
      'Father/Parent Name',
      'Age',
      'Class Interested',
      'Contact Number',
      'Email',
      'Message',
    ];

    const rows = filteredEnquiries.map((item) => [
      new Date(item.created_at).toLocaleString(),
      `"${(item.student_name || '').replace(/"/g, '""')}"`,
      `"${(item.parent_name || '').replace(/"/g, '""')}"`,
      item.age || '',
      `"${(item.class_interested || '').replace(/"/g, '""')}"`,
      `"${item.contact_number || ''}"`,
      `"${item.email || ''}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `JMT_Admission_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      (item.student_name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.parent_name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.contact_number || '').includes(searchQuery) ||
      (item.class_interested || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesClass =
      classFilter === 'all' || (item.class_interested || '').includes(classFilter);

    return matchesSearch && matchesClass;
  });

  // Calculate statistics
  const totalCount = enquiries.length;
  const todayCount = enquiries.filter((item) => {
    const itemDate = new Date(item.created_at).toDateString();
    return itemDate === new Date().toDateString();
  }).length;

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="text-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-400" />
          <p className="text-sm font-medium text-slate-300">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 1. LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center mx-auto shadow-lg font-black text-2xl tracking-wider mb-4 border border-blue-700/50">
            JMT
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Admin Portal Login
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            JMT Public Higher Secondary School & College
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-slate-200">
            <form onSubmit={handleLogin} className="space-y-5">
              {loginError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              {/* Admin ID / Username */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Admin ID / Username
                </label>
                <div className="relative rounded-lg shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. admin"
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative rounded-lg shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg shadow-md text-sm font-bold text-white bg-slate-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all duration-200 active:scale-95 disabled:opacity-70 cursor-pointer"
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center border-t border-slate-100 pt-4">
              <a href="/" className="text-xs text-blue-900 hover:underline font-semibold inline-flex items-center gap-1">
                ← Return to Public Website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-sm border border-blue-700/50">
                JMT
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight uppercase">
                  Admission Enquiries Admin
                </h1>
                <p className="text-[10px] text-slate-400 hidden sm:block">
                  JMT Public Higher Secondary School & College
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors"
              >
                <span>View Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Enquiries</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{totalCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Received Today</p>
              <h3 className="text-3xl font-black text-emerald-600 mt-1">{todayCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Database Status</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-bold text-slate-800">Supabase Connected</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Controls Bar: Search, Filter, Refresh, Export */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search name, phone, class..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
              />
            </div>

            {/* Class Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="w-full sm:w-auto py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="all">All Classes & Groups</option>
                <option value="Class IX">Class IX</option>
                <option value="Class X">Class X</option>
                <option value="Class XI">Class XI</option>
                <option value="Class XII">Class XII</option>
                <option value="Pre-Medical">Pre-Medical</option>
                <option value="Pre-Engineering">Pre-Engineering</option>
                <option value="Commerce">Commerce</option>
                <option value="General Science">General Science</option>
                <option value="Humanities">Humanities</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            {/* Refresh Button */}
            <button
              onClick={() => fetchEnquiries()}
              disabled={loadingEnquiries}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {/* Export CSV Button */}
            <button
              onClick={exportToCSV}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Export to Excel / CSV</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/90 text-slate-800 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Date & Time</th>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Student & Father Name</th>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Class / Group</th>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Contact & Quick Action</th>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Email</th>
                  <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Message</th>
                  <th scope="col" className="px-4 py-3.5 text-center whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                      <p className="font-semibold text-base">No admission enquiries found</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {searchQuery || classFilter !== 'all'
                          ? 'Try adjusting your search or filter.'
                          : 'New submissions from your website will appear here automatically.'}
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/40 transition-colors">
                      {/* Date */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-slate-500 text-xs">
                        {new Date(item.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                        <br />
                        <span className="text-[10px] text-slate-400">
                          {new Date(item.created_at).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </td>

                      {/* Student & Father Name */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="font-bold text-slate-900">{item.student_name}</div>
                        {item.parent_name && item.parent_name !== item.student_name && (
                          <div className="text-xs text-slate-500">S/o, D/o: {item.parent_name}</div>
                        )}
                        {item.age && (
                          <span className="text-[11px] text-slate-400">Age: {item.age} yrs</span>
                        )}
                      </td>

                      {/* Class */}
                      <td className="px-4 py-3.5">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-900 border border-blue-100 whitespace-nowrap">
                          {item.class_interested}
                        </span>
                      </td>

                      {/* Contact & WhatsApp */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="font-bold text-slate-800">{item.contact_number}</div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <a
                            href={`tel:${item.contact_number.replace(/[^0-9]/g, '')}`}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-semibold transition-colors"
                            title="Call Student"
                          >
                            <Phone className="w-3 h-3 text-slate-900" />
                            <span>Call</span>
                          </a>
                          <a
                            href={`https://wa.me/${item.contact_number.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[11px] font-semibold transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-600" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-xs text-slate-600">
                        {item.email ? (
                          <a href={`mailto:${item.email}`} className="text-blue-900 hover:underline">
                            {item.email}
                          </a>
                        ) : (
                          <span className="text-slate-400 italic">Not provided</span>
                        )}
                      </td>

                      {/* Message */}
                      <td className="px-4 py-3.5 text-xs text-slate-600 max-w-xs">
                        {item.message ? (
                          <p className="line-clamp-2" title={item.message}>
                            {item.message}
                          </p>
                        ) : (
                          <span className="text-slate-400 italic">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 text-center whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete Record"
                        >
                          {deletingId === item.id ? (
                            <Loader2 className="w-4 h-4 animate-spin text-rose-600" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Showing <strong>{filteredEnquiries.length}</strong> of <strong>{totalCount}</strong> enquiries</span>
            <span className="text-[11px] text-slate-400">Connected to Supabase Table: admission_enquiries</span>
          </div>
        </div>

      </main>
    </div>
  );
}
