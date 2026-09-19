'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  BookOpen,
  PenSquare,
  Plus,
  Image as ImageIcon,
  Upload,
  Sparkles,
  Tag,
  Clock,
  Edit3,
  Check,
  X,
  FileText,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { BLOG_CATEGORIES } from '../../src/data/blogsData';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState('enquiries'); // 'enquiries' | 'blogs'

  // Login Form States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard States - Enquiries
  const [enquiries, setEnquiries] = useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('all');
  const [deletingId, setDeletingId] = useState(null);

  // Dashboard States - Blogs
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [blogSearchQuery, setBlogSearchQuery] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('All');
  const [deletingBlogId, setDeletingBlogId] = useState(null);

  // Blog Editor Form State
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSlug, setBlogSlug] = useState('');
  const [blogCategory, setBlogCategory] = useState('Admissions Guidance');
  const [blogAuthor, setBlogAuthor] = useState('JMT Academic Team');
  const [blogAuthorAvatar, setBlogAuthorAvatar] = useState('JA');
  const [blogReadTime, setBlogReadTime] = useState('5 min read');
  const [blogFeatured, setBlogFeatured] = useState(false);
  const [blogImage, setBlogImage] = useState('');
  const [blogSecondaryImage, setBlogSecondaryImage] = useState('');
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogSnippetAnswer, setBlogSnippetAnswer] = useState('');
  const [blogTakeaways, setBlogTakeaways] = useState(['']);
  const [blogContent, setBlogContent] = useState('');
  const [savingBlog, setSavingBlog] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [contentPreviewMode, setContentPreviewMode] = useState(false);
  const [blogFormMessage, setBlogFormMessage] = useState({ type: '', text: '' });

  const editorFormRef = useRef(null);
  const fileInputRef = useRef(null);

  // Check existing session on mount
  useEffect(() => {
    fetchEnquiries(true);
    fetchBlogs();
  }, []);

  const fetchEnquiries = async (isInitialCheck = false) => {
    if (!isInitialCheck) setLoadingEnquiries(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      if (!token && isInitialCheck) {
        setIsAuthenticated(false);
        setCheckingAuth(false);
        return;
      }

      const response = await fetch('/api/admin/enquiries', {
        headers: {
          'x-admin-token': token,
        },
        credentials: 'include',
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setEnquiries(data.enquiries || []);
      } else {
        if (response.status === 401) {
          if (typeof window !== 'undefined') localStorage.removeItem('admin_token');
          setIsAuthenticated(false);
        } else {
          if (!isInitialCheck) {
            alert(data.error || 'Failed to fetch database records.');
          }
        }
      }
    } catch (err) {
      if (!isInitialCheck) console.error('Fetch enquiries error:', err);
    } finally {
      setCheckingAuth(false);
      setLoadingEnquiries(false);
    }
  };

  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error('Fetch blogs error:', err);
    } finally {
      setLoadingBlogs(false);
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
        credentials: 'include',
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== 'undefined' && data.token) {
          localStorage.setItem('admin_token', data.token);
        }
        setIsAuthenticated(true);
        fetchEnquiries();
        fetchBlogs();
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

  const handleDeleteEnquiry = async (id) => {
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

  // Auto-generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (val) => {
    setBlogTitle(val);
    if (!editingBlogId) {
      setBlogSlug(generateSlug(val));
    }
  };

  // Image Upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'x-admin-token': token,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setBlogImage(data.url);
        setBlogFormMessage({ type: 'success', text: 'Image uploaded successfully!' });
      } else {
        setBlogFormMessage({ type: 'error', text: data.error || 'Image upload failed.' });
      }
    } catch (err) {
      console.error('Image upload error:', err);
      setBlogFormMessage({ type: 'error', text: 'Error uploading image.' });
    } finally {
      setUploadingImage(false);
    }
  };

  // Dynamic Key Takeaways handlers
  const handleTakeawayChange = (index, val) => {
    const updated = [...blogTakeaways];
    updated[index] = val;
    setBlogTakeaways(updated);
  };

  const addTakeawayField = () => {
    setBlogTakeaways([...blogTakeaways, '']);
  };

  const removeTakeawayField = (index) => {
    if (blogTakeaways.length <= 1) {
      setBlogTakeaways(['']);
      return;
    }
    setBlogTakeaways(blogTakeaways.filter((_, i) => i !== index));
  };

  // Formatting helpers for rich content editor
  const insertContentTag = (openTag, closeTag = '') => {
    const textarea = document.getElementById('blog-content-area');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end) || 'Text here';
    const replacement = `${openTag}${selectedText}${closeTag}`;

    const newContent = text.substring(0, start) + replacement + text.substring(end);
    setBlogContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + openTag.length + selectedText.length);
    }, 50);
  };

  // Reset Blog Form
  const resetBlogForm = () => {
    setEditingBlogId(null);
    setBlogTitle('');
    setBlogSlug('');
    setBlogCategory('Admissions Guidance');
    setBlogAuthor('JMT Academic Team');
    setBlogAuthorAvatar('JA');
    setBlogReadTime('5 min read');
    setBlogFeatured(false);
    setBlogImage('');
    setBlogSecondaryImage('');
    setBlogExcerpt('');
    setBlogSnippetAnswer('');
    setBlogTakeaways(['']);
    setBlogContent('');
    setBlogFormMessage({ type: '', text: '' });
  };

  // Load Blog into Form for Editing
  const handleEditBlog = (blog) => {
    setEditingBlogId(blog.id);
    setBlogTitle(blog.title || '');
    setBlogSlug(blog.slug || '');
    setBlogCategory(blog.category || 'Admissions Guidance');
    setBlogAuthor(blog.author || 'JMT Academic Team');
    setBlogAuthorAvatar(blog.author_avatar || 'JA');
    setBlogReadTime(blog.read_time || '5 min read');
    setBlogFeatured(Boolean(blog.featured));
    setBlogImage(blog.image || '');
    setBlogSecondaryImage(blog.secondary_image || '');
    setBlogExcerpt(blog.excerpt || '');
    setBlogSnippetAnswer(blog.snippet_answer || '');
    setBlogTakeaways(
      Array.isArray(blog.key_takeaways) && blog.key_takeaways.length > 0
        ? blog.key_takeaways
        : ['']
    );
    setBlogContent(blog.content || '');
    setBlogFormMessage({ type: '', text: '' });

    if (editorFormRef.current) {
      editorFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Save or Publish Blog
  const handleSaveBlog = async (e) => {
    e.preventDefault();
    setBlogFormMessage({ type: '', text: '' });

    if (!blogTitle.trim()) {
      setBlogFormMessage({ type: 'error', text: 'Please enter a blog title.' });
      return;
    }
    if (!blogSlug.trim()) {
      setBlogFormMessage({ type: 'error', text: 'Please enter a valid URL slug.' });
      return;
    }
    if (!blogContent.trim()) {
      setBlogFormMessage({ type: 'error', text: 'Please write some blog content.' });
      return;
    }

    setSavingBlog(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      const payload = {
        title: blogTitle.trim(),
        slug: blogSlug.trim().toLowerCase(),
        category: blogCategory,
        author: blogAuthor.trim() || 'JMT Academic Team',
        author_avatar: blogAuthorAvatar.trim() || 'JA',
        read_time: blogReadTime.trim() || '5 min read',
        featured: blogFeatured,
        image: blogImage.trim() || '/hero-students.jpg',
        secondary_image: blogSecondaryImage.trim() || null,
        excerpt: blogExcerpt.trim(),
        snippet_answer: blogSnippetAnswer.trim() || null,
        key_takeaways: blogTakeaways.filter((t) => t.trim().length > 0),
        content: blogContent.trim(),
      };

      const url = editingBlogId ? `/api/blogs/${editingBlogId}` : '/api/blogs';
      const method = editingBlogId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setBlogFormMessage({
          type: 'success',
          text: editingBlogId ? 'Blog updated successfully!' : 'New blog published successfully!',
        });
        fetchBlogs();
        if (!editingBlogId) {
          resetBlogForm();
        }
      } else {
        setBlogFormMessage({
          type: 'error',
          text: data.error || 'Failed to save blog post.',
        });
      }
    } catch (err) {
      console.error('Save blog error:', err);
      setBlogFormMessage({ type: 'error', text: 'Connection error while saving blog.' });
    } finally {
      setSavingBlog(false);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id, title) => {
    if (!confirm(`Are you sure you want to permanently delete the blog "${title}"?`)) return;

    setDeletingBlogId(id);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-token': token,
        },
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
        if (editingBlogId === id) {
          resetBlogForm();
        }
      } else {
        alert(data.error || 'Failed to delete blog.');
      }
    } catch (err) {
      alert('Error deleting blog.');
    } finally {
      setDeletingBlogId(null);
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

  // Filtered blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory =
      blogCategoryFilter === 'All' || b.category === blogCategoryFilter;
    const matchesSearch =
      (b.title || '').toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      (b.excerpt || '').toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      (b.slug || '').toLowerCase().includes(blogSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      {/* Top Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-sm border border-blue-700/50">
                JMT
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight uppercase">
                  JMT Admin Portal
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

      {/* Main Tabs Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`py-4 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'enquiries'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admission Enquiries</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] bg-indigo-50 text-indigo-700 font-extrabold border border-indigo-100">
                {enquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`py-4 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenSquare className="w-4 h-4" />
              <span>Blog &amp; Article Manager</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] bg-amber-50 text-amber-700 font-extrabold border border-amber-200">
                {blogs.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ==================================================== */}
        {/* TAB 1: ADMISSION ENQUIRIES */}
        {/* ==================================================== */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
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

            {/* Controls Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
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
                <button
                  onClick={() => fetchEnquiries()}
                  disabled={loadingEnquiries}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={exportToCSV}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Export to Excel / CSV</span>
                </button>
              </div>
            </div>

            {/* Enquiries Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/90 text-slate-800 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Date &amp; Time</th>
                      <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Student &amp; Father Name</th>
                      <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Class / Group</th>
                      <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Contact &amp; Action</th>
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

                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <div className="font-bold text-slate-900">{item.student_name}</div>
                            {item.parent_name && item.parent_name !== item.student_name && (
                              <div className="text-xs text-slate-500">S/o, D/o: {item.parent_name}</div>
                            )}
                            {item.age && (
                              <span className="text-[11px] text-slate-400">Age: {item.age} yrs</span>
                            )}
                          </td>

                          <td className="px-4 py-3.5">
                            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-900 border border-blue-100 whitespace-nowrap">
                              {item.class_interested}
                            </span>
                          </td>

                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <div className="font-bold text-slate-800">{item.contact_number}</div>
                            <div className="flex items-center gap-1.5 mt-1">
                              <a
                                href={`tel:${item.contact_number.replace(/[^0-9]/g, '')}`}
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-semibold transition-colors"
                              >
                                <Phone className="w-3 h-3 text-slate-900" />
                                <span>Call</span>
                              </a>
                              <a
                                href={`https://wa.me/${item.contact_number.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[11px] font-semibold transition-colors"
                              >
                                <MessageCircle className="w-3 h-3 text-emerald-600" />
                                <span>WhatsApp</span>
                              </a>
                            </div>
                          </td>

                          <td className="px-4 py-3.5 whitespace-nowrap text-xs text-slate-600">
                            {item.email ? (
                              <a href={`mailto:${item.email}`} className="text-blue-900 hover:underline">
                                {item.email}
                              </a>
                            ) : (
                              <span className="text-slate-400 italic">Not provided</span>
                            )}
                          </td>

                          <td className="px-4 py-3.5 text-xs text-slate-600 max-w-xs">
                            {item.message ? (
                              <p className="line-clamp-2" title={item.message}>
                                {item.message}
                              </p>
                            ) : (
                              <span className="text-slate-400 italic">—</span>
                            )}
                          </td>

                          <td className="px-4 py-3.5 text-center whitespace-nowrap">
                            <button
                              onClick={() => handleDeleteEnquiry(item.id)}
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
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: BLOG & ARTICLE MANAGER */}
        {/* ==================================================== */}
        {activeTab === 'blogs' && (
          <div className="space-y-10">
            
            {/* 1. Blog Creator / Editor Card */}
            <div
              ref={editorFormRef}
              className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{editingBlogId ? 'Edit Mode' : 'New Post'}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    {editingBlogId ? 'Edit Blog Post' : 'Write & Publish a New Blog Post'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Publish rich educational articles, guides, and tips directly to your website.
                  </p>
                </div>

                {editingBlogId && (
                  <button
                    type="button"
                    onClick={resetBlogForm}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel Editing</span>
                  </button>
                )}
              </div>

              <form onSubmit={handleSaveBlog} className="p-6 sm:p-8 space-y-6">
                
                {/* Form Status Message */}
                {blogFormMessage.text && (
                  <div
                    className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                      blogFormMessage.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {blogFormMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <span>{blogFormMessage.text}</span>
                  </div>
                )}

                {/* Grid 1: Title & Category */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div className="lg:col-span-8 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Blog Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={blogTitle}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. Complete Guide to Matric vs O-Level in Karachi: What to Choose?"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div className="lg:col-span-4 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={blogCategory}
                      onChange={(e) => setBlogCategory(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    >
                      {BLOG_CATEGORIES.filter((c) => c !== 'All Posts').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Grid 2: Slug, Author, Read Time, Featured */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      URL Slug <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={blogSlug}
                      onChange={(e) => setBlogSlug(e.target.value)}
                      placeholder="e.g. matric-vs-olevel-guide"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                    <span className="text-[10px] text-slate-400">URL: /blogs/{blogSlug || '...'}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={blogAuthor}
                      onChange={(e) => setBlogAuthor(e.target.value)}
                      placeholder="e.g. JMT Academic Team"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={blogReadTime}
                      onChange={(e) => setBlogReadTime(e.target.value)}
                      placeholder="e.g. 5 min read"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col justify-end">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100/70 transition-colors">
                      <input
                        type="checkbox"
                        checked={blogFeatured}
                        onChange={(e) => setBlogFeatured(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <span className="text-xs font-bold text-amber-900">
                        ⭐ Pin as Featured Post
                      </span>
                    </label>
                  </div>
                </div>

                {/* Grid 3: Featured Image Upload & URL */}
                <div className="space-y-2 p-5 rounded-2xl bg-slate-50/80 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-indigo-600" />
                        <span>Primary Featured Image</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Upload a photo from your computer or provide a direct image URL.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs cursor-pointer transition-all disabled:opacity-50"
                      >
                        {uploadingImage ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Uploading...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-3.5 h-3.5" />
                            <span>Upload Image</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-9">
                      <input
                        type="text"
                        value={blogImage}
                        onChange={(e) => setBlogImage(e.target.value)}
                        placeholder="Image URL or uploaded file path..."
                        className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>

                    {blogImage && (
                      <div className="sm:col-span-3">
                        <div className="h-12 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-900 relative">
                          <img
                            src={blogImage}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Introductory Excerpt (Short Summary)
                  </label>
                  <textarea
                    rows={2}
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="A brief overview of the blog post shown on preview cards..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white leading-relaxed"
                  />
                </div>

                {/* Snippet Answer Callout Box */}
                <div className="space-y-1.5 p-4 rounded-xl bg-purple-50/60 border border-purple-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Featured Snippet Quick Answer (Optional SEO Box)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={blogSnippetAnswer}
                    onChange={(e) => setBlogSnippetAnswer(e.target.value)}
                    placeholder="e.g. Matriculation under Karachi/Ziauddin Board focuses on textbook-based state syllabus, while Cambridge O-Levels emphasize analytical and inquiry-based application..."
                    className="w-full px-3.5 py-2 bg-white border border-purple-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                  />
                </div>

                {/* Dynamic Key Takeaways */}
                <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Key Takeaways (Bullet Points)
                    </label>
                    <button
                      type="button"
                      onClick={addTakeawayField}
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-xs font-bold cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Takeaway</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {blogTakeaways.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 w-5 text-right">{idx + 1}.</span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                          placeholder={`Key point #${idx + 1}...`}
                          className="flex-grow px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        <button
                          type="button"
                          onClick={() => removeTakeawayField(idx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rich Content Editor with Formatting Toolbar & Preview */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Article Content (HTML / Text) <span className="text-rose-500">*</span>
                    </label>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setContentPreviewMode(false)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          !contentPreviewMode
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Code / Text
                      </button>
                      <button
                        type="button"
                        onClick={() => setContentPreviewMode(true)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          contentPreviewMode
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Live Preview
                      </button>
                    </div>
                  </div>

                  {/* Toolbar */}
                  {!contentPreviewMode && (
                    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-100 rounded-lg text-xs border border-slate-200">
                      <button
                        type="button"
                        onClick={() => insertContentTag('<h2>', '</h2>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded font-bold"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertContentTag('<h3>', '</h3>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded font-bold"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => insertContentTag('<strong>', '</strong>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded font-bold"
                      >
                        Bold
                      </button>
                      <button
                        type="button"
                        onClick={() => insertContentTag('<p>', '</p>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded"
                      >
                        Paragraph
                      </button>
                      <button
                        type="button"
                        onClick={() => insertContentTag('<ul>\n  <li>', '</li>\n</ul>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded"
                      >
                        Bullet List
                      </button>
                      <button
                        type="button"
                        onClick={() => insertContentTag('<blockquote>', '</blockquote>')}
                        className="px-2 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded italic"
                      >
                        Quote
                      </button>
                    </div>
                  )}

                  {/* Editor or Live Preview Box */}
                  {!contentPreviewMode ? (
                    <textarea
                      id="blog-content-area"
                      rows={12}
                      required
                      value={blogContent}
                      onChange={(e) => setBlogContent(e.target.value)}
                      placeholder="Write your article content here in HTML or formatted text..."
                      className="w-full p-4 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white leading-relaxed"
                    />
                  ) : (
                    <div
                      className="w-full min-h-[300px] p-6 bg-white border border-slate-200 rounded-xl text-slate-800 text-xs sm:text-sm prose prose-slate max-w-none leading-relaxed overflow-y-auto"
                      dangerouslySetInnerHTML={{ __html: blogContent || '<p className="text-slate-400 italic">No content typed yet.</p>' }}
                    />
                  )}
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={resetBlogForm}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Clear Form
                  </button>

                  <button
                    type="submit"
                    disabled={savingBlog}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {savingBlog ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Saving to Database...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>{editingBlogId ? 'Update & Save Changes' : 'Publish Blog Post'}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

            {/* 2. Published Blogs Management Table */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Published Blogs &amp; Articles ({blogs.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Manage, edit, view, or delete existing articles from your website.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {/* Search */}
                  <div className="relative flex-grow sm:w-60">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      value={blogSearchQuery}
                      onChange={(e) => setBlogSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={blogCategoryFilter}
                    onChange={(e) => setBlogCategoryFilter(e.target.value)}
                    className="py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="All">All Categories</option>
                    {BLOG_CATEGORIES.filter((c) => c !== 'All Posts').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  {/* Refresh Button */}
                  <button
                    onClick={fetchBlogs}
                    disabled={loadingBlogs}
                    className="p-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs"
                    title="Refresh Blogs"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingBlogs ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                      <tr>
                        <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Thumbnail</th>
                        <th scope="col" className="px-4 py-3.5">Title &amp; URL</th>
                        <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Category</th>
                        <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Author &amp; Date</th>
                        <th scope="col" className="px-4 py-3.5 whitespace-nowrap">Status</th>
                        <th scope="col" className="px-4 py-3.5 text-center whitespace-nowrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {loadingBlogs ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                            <Loader2 className="w-6 h-6 animate-spin mx-auto text-indigo-600 mb-2" />
                            <p className="font-semibold text-xs">Loading Blogs...</p>
                          </td>
                        </tr>
                      ) : filteredBlogs.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                            <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                            <p className="font-semibold text-sm">No blog posts found</p>
                            <p className="text-xs text-slate-400 mt-1">
                              Use the form above to write and publish your first blog!
                            </p>
                          </td>
                        </tr>
                      ) : (
                        filteredBlogs.map((b) => (
                          <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                            {/* Thumbnail */}
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="w-14 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-200">
                                <img
                                  src={b.image || '/hero-students.jpg'}
                                  alt={b.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </td>

                            {/* Title & Slug */}
                            <td className="px-4 py-3.5 max-w-sm">
                              <div className="font-bold text-slate-900 line-clamp-1">{b.title}</div>
                              <div className="text-[11px] text-indigo-600 font-mono">/blogs/{b.slug}</div>
                            </td>

                            {/* Category */}
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                {b.category}
                              </span>
                            </td>

                            {/* Author & Date */}
                            <td className="px-4 py-3.5 whitespace-nowrap text-xs text-slate-600">
                              <span className="font-bold text-slate-800 block">{b.author || 'JMT Academic Team'}</span>
                              <span className="text-[10px] text-slate-400">
                                {new Date(b.created_at).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </span>
                            </td>

                            {/* Status */}
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              {b.featured ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                                  ★ Featured
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
                                  Standard
                                </span>
                              )}
                            </td>

                            {/* Actions */}
                            <td className="px-4 py-3.5 whitespace-nowrap text-center">
                              <div className="inline-flex items-center gap-1">
                                <a
                                  href={`/blogs/${b.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                                  title="View on Website"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>

                                <button
                                  type="button"
                                  onClick={() => handleEditBlog(b)}
                                  className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                                  title="Edit Blog"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleDeleteBlog(b.id, b.title)}
                                  disabled={deletingBlogId === b.id}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                                  title="Delete Blog"
                                >
                                  {deletingBlogId === b.id ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-rose-600" />
                                  ) : (
                                    <Trash2 className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
