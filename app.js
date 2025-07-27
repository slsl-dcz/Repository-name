// 智能会商多场景协同管理系统 - 主应用逻辑

class ConferenceApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.data = window.appData;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadPage('dashboard');
        this.updateNotificationBadge();
    }

    // 绑定事件监听器
    bindEvents() {
        // 侧边导航点击事件
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                this.switchPage(page);
            });
        });

        // 模态框事件
        document.querySelector('.modal-close').addEventListener('click', () => {
            this.hideModal();
        });
        document.querySelector('.modal-cancel').addEventListener('click', () => {
            this.hideModal();
        });
        document.querySelector('#modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                this.hideModal();
            }
        });
    }

    // 切换页面
    switchPage(page) {
        // 更新导航状态
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        // 更新面包屑
        this.updateBreadcrumb(page);

        // 加载页面内容
        this.loadPage(page);
        this.currentPage = page;
    }

    // 更新面包屑导航
    updateBreadcrumb(page) {
        const pageNames = {
            dashboard: '系统概览',
            meetings: '会商会议',
            participants: '参会人员',
            documents: '文档资料',
            decisions: '决策记录',
            tasks: '任务跟踪',
            analytics: '数据分析',
            settings: '系统设置',
            permissions: '权限管理',
            notifications: '消息通知'
        };

        const breadcrumb = document.querySelector('.breadcrumb');
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item">首页</span>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-item current">${pageNames[page]}</span>
        `;
    }

    // 加载页面内容
    loadPage(page) {
        const container = document.querySelector('.page-container');
        
        switch(page) {
            case 'dashboard':
                container.innerHTML = this.renderDashboard();
                this.initDashboardCharts();
                break;
            case 'meetings':
                container.innerHTML = this.renderMeetings();
                this.bindMeetingEvents();
                break;
            case 'participants':
                container.innerHTML = this.renderParticipants();
                this.bindParticipantEvents();
                break;
            case 'documents':
                container.innerHTML = this.renderDocuments();
                this.bindDocumentEvents();
                break;
            case 'decisions':
                container.innerHTML = this.renderDecisions();
                this.bindDecisionEvents();
                break;
            case 'tasks':
                container.innerHTML = this.renderTasks();
                this.bindTaskEvents();
                break;
            case 'analytics':
                container.innerHTML = this.renderAnalytics();
                this.initAnalyticsCharts();
                break;
            case 'settings':
                container.innerHTML = this.renderSettings();
                this.bindSettingEvents();
                break;
            case 'permissions':
                container.innerHTML = this.renderPermissions();
                this.bindPermissionEvents();
                break;
            case 'notifications':
                container.innerHTML = this.renderNotifications();
                this.bindNotificationEvents();
                break;
            default:
                container.innerHTML = '<div class="error">页面不存在</div>';
        }
    }

    // 渲染系统概览页面
    renderDashboard() {
        const stats = this.data.dashboard.stats;
        const recentMeetings = this.data.dashboard.recentMeetings;

        return `
            <div class="dashboard-container">
                <h2 class="page-title">系统概览</h2>
                
                <!-- 统计卡片 -->
                <div class="stats-grid">
                    ${stats.map(stat => `
                        <div class="stat-card">
                            <div class="stat-icon" style="color: ${stat.color}">
                                <i class="${stat.icon}"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">${stat.value}</div>
                                <div class="stat-title">${stat.title}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- 图表区域 -->
                <div class="charts-grid">
                    <div class="chart-card">
                        <div class="card-header">
                            <h3 class="card-title">会议趋势分析</h3>
                        </div>
                        <canvas id="meetingTrendChart" width="400" height="200"></canvas>
                    </div>
                    <div class="chart-card">
                        <div class="card-header">
                            <h3 class="card-title">部门参与率</h3>
                        </div>
                        <canvas id="participationChart" width="400" height="200"></canvas>
                    </div>
                </div>

                <!-- 最近会议 -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">最近会议</h3>
                        <button class="btn btn-primary" onclick="app.switchPage('meetings')">
                            <i class="fas fa-plus"></i> 查看全部
                        </button>
                    </div>
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>会议标题</th>
                                    <th>时间</th>
                                    <th>状态</th>
                                    <th>参与人数</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${recentMeetings.map(meeting => `
                                    <tr>
                                        <td>${meeting.title}</td>
                                        <td>${meeting.time}</td>
                                        <td><span class="status-badge ${this.getStatusClass(meeting.status)}">${meeting.status}</span></td>
                                        <td>${meeting.participants}人</td>
                                        <td>
                                            <button class="btn btn-sm btn-primary">查看</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    // 渲染会议管理页面
    renderMeetings() {
        const meetings = this.data.meetings;
        
        return `
            <div class="meetings-container">
                <div class="page-header">
                    <h2 class="page-title">会商会议管理</h2>
                    <div class="page-actions">
                        <button class="btn btn-primary" onclick="app.showCreateMeetingModal()">
                            <i class="fas fa-plus"></i> 创建会议
                        </button>
                    </div>
                </div>

                <!-- 搜索和筛选 -->
                <div class="filter-bar">
                    <div class="search-box">
                        <input type="text" class="form-control" placeholder="搜索会议..." id="meetingSearch">
                        <i class="fas fa-search"></i>
                    </div>
                    <select class="form-control" id="statusFilter">
                        <option value="">全部状态</option>
                        <option value="待开始">待开始</option>
                        <option value="进行中">进行中</option>
                        <option value="已结束">已结束</option>
                    </select>
                    <select class="form-control" id="typeFilter">
                        <option value="">全部类型</option>
                        <option value="战略规划">战略规划</option>
                        <option value="产品评审">产品评审</option>
                        <option value="技术讨论">技术讨论</option>
                        <option value="市场分析">市场分析</option>
                    </select>
                </div>

                <!-- 会议列表 -->
                <div class="card">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>会议标题</th>
                                    <th>类型</th>
                                    <th>开始时间</th>
                                    <th>地点</th>
                                    <th>组织者</th>
                                    <th>状态</th>
                                    <th>参与人数</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="meetingsTableBody">
                                ${meetings.map(meeting => `
                                    <tr data-id="${meeting.id}">
                                        <td>
                                            <div class="meeting-title">${meeting.title}</div>
                                            <div class="meeting-desc">${meeting.description}</div>
                                        </td>
                                        <td><span class="type-badge">${meeting.type}</span></td>
                                        <td>${meeting.startTime}</td>
                                        <td>${meeting.location}</td>
                                        <td>${meeting.organizer}</td>
                                        <td><span class="status-badge ${this.getStatusClass(meeting.status)}">${meeting.status}</span></td>
                                        <td>${meeting.participants}人</td>
                                        <td>
                                            <div class="action-buttons">
                                                <button class="btn btn-sm btn-primary" onclick="app.viewMeeting(${meeting.id})">查看</button>
                                                <button class="btn btn-sm btn-secondary" onclick="app.editMeeting(${meeting.id})">编辑</button>
                                                <button class="btn btn-sm btn-danger" onclick="app.deleteMeeting(${meeting.id})">删除</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="pagination">
                    <button class="btn btn-secondary">上一页</button>
                    <span class="page-info">第 1 页，共 ${Math.ceil(meetings.length / 10)} 页</span>
                    <button class="btn btn-secondary">下一页</button>
                </div>
            </div>
        `;
    }

    // 获取状态样式类
    getStatusClass(status) {
        const statusMap = {
            '进行中': 'status-active',
            '待开始': 'status-pending',
            '已结束': 'status-completed',
            '已取消': 'status-cancelled'
        };
        return statusMap[status] || 'status-pending';
    }

    // 初始化仪表板图表
    initDashboardCharts() {
        // 会议趋势图表
        const trendCtx = document.getElementById('meetingTrendChart');
        if (trendCtx) {
            new Chart(trendCtx, {
                type: 'line',
                data: {
                    labels: this.data.dashboard.chartData.meetingTrend.labels,
                    datasets: [{
                        label: '会议数量',
                        data: this.data.dashboard.chartData.meetingTrend.data,
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // 参与率图表
        const participationCtx = document.getElementById('participationChart');
        if (participationCtx) {
            new Chart(participationCtx, {
                type: 'doughnut',
                data: {
                    labels: this.data.dashboard.chartData.participationRate.labels,
                    datasets: [{
                        data: this.data.dashboard.chartData.participationRate.data,
                        backgroundColor: [
                            '#667eea',
                            '#28a745',
                            '#ffc107',
                            '#dc3545',
                            '#6c757d'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }
    }

    // 绑定会议相关事件
    bindMeetingEvents() {
        // 搜索功能
        const searchInput = document.getElementById('meetingSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterMeetings();
            });
        }

        // 状态筛选
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.filterMeetings();
            });
        }

        // 类型筛选
        const typeFilter = document.getElementById('typeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', () => {
                this.filterMeetings();
            });
        }
    }

    // 筛选会议
    filterMeetings() {
        const searchTerm = document.getElementById('meetingSearch').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        const typeFilter = document.getElementById('typeFilter').value;

        const rows = document.querySelectorAll('#meetingsTableBody tr');
        
        rows.forEach(row => {
            const title = row.querySelector('.meeting-title').textContent.toLowerCase();
            const status = row.querySelector('.status-badge').textContent;
            const type = row.querySelector('.type-badge').textContent;

            const matchesSearch = title.includes(searchTerm);
            const matchesStatus = !statusFilter || status === statusFilter;
            const matchesType = !typeFilter || type === typeFilter;

            if (matchesSearch && matchesStatus && matchesType) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // 显示创建会议模态框
    showCreateMeetingModal() {
        this.showModal('创建会议', this.renderCreateMeetingForm(), () => {
            this.createMeeting();
        });
    }

    // 渲染创建会议表单
    renderCreateMeetingForm() {
        return `
            <form id="createMeetingForm">
                <div class="form-group">
                    <label class="form-label">会议标题</label>
                    <input type="text" class="form-control" name="title" required>
                </div>
                <div class="form-group">
                    <label class="form-label">会议类型</label>
                    <select class="form-control" name="type" required>
                        <option value="">请选择类型</option>
                        <option value="战略规划">战略规划</option>
                        <option value="产品评审">产品评审</option>
                        <option value="技术讨论">技术讨论</option>
                        <option value="市场分析">市场分析</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">开始时间</label>
                    <input type="datetime-local" class="form-control" name="startTime" required>
                </div>
                <div class="form-group">
                    <label class="form-label">结束时间</label>
                    <input type="datetime-local" class="form-control" name="endTime" required>
                </div>
                <div class="form-group">
                    <label class="form-label">会议地点</label>
                    <input type="text" class="form-control" name="location" required>
                </div>
                <div class="form-group">
                    <label class="form-label">会议描述</label>
                    <textarea class="form-control" name="description" rows="3"></textarea>
                </div>
            </form>
        `;
    }

    // 创建会议
    createMeeting() {
        const form = document.getElementById('createMeetingForm');
        const formData = new FormData(form);
        
        // 这里应该发送到后端API
        console.log('创建会议:', Object.fromEntries(formData));
        
        this.hideModal();
        this.showToast('会议创建成功！', 'success');
        
        // 刷新会议列表
        setTimeout(() => {
            this.loadPage('meetings');
        }, 1000);
    }

    // 更新通知徽章
    updateNotificationBadge() {
        const unreadCount = this.data.notifications.filter(n => n.status === '未读').length;
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.textContent = unreadCount;
            badge.style.display = unreadCount > 0 ? 'flex' : 'none';
        }
    }

    // 显示模态框
    showModal(title, content, onConfirm) {
        const modal = document.getElementById('modal-overlay');
        const modalTitle = modal.querySelector('.modal-title');
        const modalBody = modal.querySelector('.modal-body');
        const confirmBtn = modal.querySelector('.modal-confirm');

        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        
        // 移除之前的事件监听器
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        
        if (onConfirm) {
            newConfirmBtn.addEventListener('click', onConfirm);
        }

        modal.classList.add('show');
    }

    // 隐藏模态框
    hideModal() {
        document.getElementById('modal-overlay').classList.remove('show');
    }

    // 显示提示消息
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        // 3秒后自动移除
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // 查看会议详情
    viewMeeting(id) {
        const meeting = this.data.meetings.find(m => m.id === id);
        if (meeting) {
            this.showModal('会议详情', this.renderMeetingDetail(meeting));
        }
    }

    // 渲染会议详情
    renderMeetingDetail(meeting) {
        return `
            <div class="meeting-detail">
                <h4>${meeting.title}</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>会议类型：</label>
                        <span>${meeting.type}</span>
                    </div>
                    <div class="detail-item">
                        <label>开始时间：</label>
                        <span>${meeting.startTime}</span>
                    </div>
                    <div class="detail-item">
                        <label>结束时间：</label>
                        <span>${meeting.endTime}</span>
                    </div>
                    <div class="detail-item">
                        <label>会议地点：</label>
                        <span>${meeting.location}</span>
                    </div>
                    <div class="detail-item">
                        <label>组织者：</label>
                        <span>${meeting.organizer}</span>
                    </div>
                    <div class="detail-item">
                        <label>参与人数：</label>
                        <span>${meeting.participants}人</span>
                    </div>
                    <div class="detail-item">
                        <label>会议状态：</label>
                        <span class="status-badge ${this.getStatusClass(meeting.status)}">${meeting.status}</span>
                    </div>
                    <div class="detail-item full-width">
                        <label>会议描述：</label>
                        <p>${meeting.description}</p>
                    </div>
                    <div class="detail-item full-width">
                        <label>会议议程：</label>
                        <ul>
                            ${meeting.agenda.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // 编辑会议
    editMeeting(id) {
        const meeting = this.data.meetings.find(m => m.id === id);
        if (meeting) {
            this.showModal('编辑会议', this.renderEditMeetingForm(meeting), () => {
                this.updateMeeting(id);
            });
        }
    }

    // 渲染编辑会议表单
    renderEditMeetingForm(meeting) {
        return `
            <form id="editMeetingForm">
                <div class="form-group">
                    <label class="form-label">会议标题</label>
                    <input type="text" class="form-control" name="title" value="${meeting.title}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">会议类型</label>
                    <select class="form-control" name="type" required>
                        <option value="战略规划" ${meeting.type === '战略规划' ? 'selected' : ''}>战略规划</option>
                        <option value="产品评审" ${meeting.type === '产品评审' ? 'selected' : ''}>产品评审</option>
                        <option value="技术讨论" ${meeting.type === '技术讨论' ? 'selected' : ''}>技术讨论</option>
                        <option value="市场分析" ${meeting.type === '市场分析' ? 'selected' : ''}>市场分析</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">会议地点</label>
                    <input type="text" class="form-control" name="location" value="${meeting.location}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">会议描述</label>
                    <textarea class="form-control" name="description" rows="3">${meeting.description}</textarea>
                </div>
            </form>
        `;
    }

    // 更新会议
    updateMeeting(id) {
        const form = document.getElementById('editMeetingForm');
        const formData = new FormData(form);
        
        // 这里应该发送到后端API
        console.log('更新会议:', id, Object.fromEntries(formData));
        
        this.hideModal();
        this.showToast('会议更新成功！', 'success');
        
        // 刷新会议列表
        setTimeout(() => {
            this.loadPage('meetings');
        }, 1000);
    }

    // 删除会议
    deleteMeeting(id) {
        this.showModal('确认删除', '确定要删除这个会议吗？此操作不可撤销。', () => {
            // 这里应该发送到后端API
            console.log('删除会议:', id);

            this.hideModal();
            this.showToast('会议删除成功！', 'success');

            // 刷新会议列表
            setTimeout(() => {
                this.loadPage('meetings');
            }, 1000);
        });
    }

    // 渲染参会人员页面
    renderParticipants() {
        const participants = this.data.participants;

        return `
            <div class="participants-container">
                <div class="page-header">
                    <h2 class="page-title">参会人员管理</h2>
                    <div class="page-actions">
                        <button class="btn btn-primary" onclick="app.showCreateParticipantModal()">
                            <i class="fas fa-plus"></i> 添加人员
                        </button>
                    </div>
                </div>

                <!-- 搜索和筛选 -->
                <div class="filter-bar">
                    <div class="search-box">
                        <input type="text" class="form-control" placeholder="搜索人员..." id="participantSearch">
                        <i class="fas fa-search"></i>
                    </div>
                    <select class="form-control" id="departmentFilter">
                        <option value="">全部部门</option>
                        <option value="战略规划部">战略规划部</option>
                        <option value="产品部">产品部</option>
                        <option value="技术部">技术部</option>
                        <option value="市场部">市场部</option>
                        <option value="客服部">客服部</option>
                        <option value="财务部">财务部</option>
                        <option value="人事部">人事部</option>
                        <option value="IT部">IT部</option>
                    </select>
                </div>

                <!-- 人员列表 -->
                <div class="card">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>部门</th>
                                    <th>职位</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>参会次数</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="participantsTableBody">
                                ${participants.map(participant => `
                                    <tr data-id="${participant.id}">
                                        <td>
                                            <div class="participant-info">
                                                <div class="participant-avatar">
                                                    <i class="fas fa-user"></i>
                                                </div>
                                                <div class="participant-name">${participant.name}</div>
                                            </div>
                                        </td>
                                        <td>${participant.department}</td>
                                        <td>${participant.position}</td>
                                        <td>${participant.email}</td>
                                        <td>${participant.phone}</td>
                                        <td>${participant.meetingCount}</td>
                                        <td><span class="status-badge status-active">${participant.status}</span></td>
                                        <td>
                                            <div class="action-buttons">
                                                <button class="btn btn-sm btn-primary" onclick="app.viewParticipant(${participant.id})">查看</button>
                                                <button class="btn btn-sm btn-secondary" onclick="app.editParticipant(${participant.id})">编辑</button>
                                                <button class="btn btn-sm btn-danger" onclick="app.deleteParticipant(${participant.id})">删除</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="pagination">
                    <button class="btn btn-secondary">上一页</button>
                    <span class="page-info">第 1 页，共 ${Math.ceil(participants.length / 10)} 页</span>
                    <button class="btn btn-secondary">下一页</button>
                </div>
            </div>
        `;
    }

    // 渲染文档资料页面
    renderDocuments() {
        const documents = this.data.documents;

        return `
            <div class="documents-container">
                <div class="page-header">
                    <h2 class="page-title">文档资料管理</h2>
                    <div class="page-actions">
                        <button class="btn btn-primary" onclick="app.showUploadDocumentModal()">
                            <i class="fas fa-upload"></i> 上传文档
                        </button>
                    </div>
                </div>

                <!-- 搜索和筛选 -->
                <div class="filter-bar">
                    <div class="search-box">
                        <input type="text" class="form-control" placeholder="搜索文档..." id="documentSearch">
                        <i class="fas fa-search"></i>
                    </div>
                    <select class="form-control" id="categoryFilter">
                        <option value="">全部分类</option>
                        <option value="战略规划">战略规划</option>
                        <option value="产品设计">产品设计</option>
                        <option value="技术架构">技术架构</option>
                        <option value="市场分析">市场分析</option>
                        <option value="服务优化">服务优化</option>
                        <option value="预算管理">预算管理</option>
                        <option value="人力资源">人力资源</option>
                        <option value="安全管理">安全管理</option>
                    </select>
                    <select class="form-control" id="documentStatusFilter">
                        <option value="">全部状态</option>
                        <option value="草稿">草稿</option>
                        <option value="审核中">审核中</option>
                        <option value="已发布">已发布</option>
                    </select>
                </div>

                <!-- 文档列表 -->
                <div class="card">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>文档标题</th>
                                    <th>类型</th>
                                    <th>分类</th>
                                    <th>作者</th>
                                    <th>大小</th>
                                    <th>下载次数</th>
                                    <th>状态</th>
                                    <th>更新时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="documentsTableBody">
                                ${documents.map(document => `
                                    <tr data-id="${document.id}">
                                        <td>
                                            <div class="document-title">${document.title}</div>
                                            <div class="document-desc">${document.description}</div>
                                        </td>
                                        <td><span class="type-badge">${document.type}</span></td>
                                        <td>${document.category}</td>
                                        <td>${document.author}</td>
                                        <td>${document.size}</td>
                                        <td>${document.downloads}</td>
                                        <td><span class="status-badge ${this.getDocumentStatusClass(document.status)}">${document.status}</span></td>
                                        <td>${document.updateTime}</td>
                                        <td>
                                            <div class="action-buttons">
                                                <button class="btn btn-sm btn-primary" onclick="app.downloadDocument(${document.id})">下载</button>
                                                <button class="btn btn-sm btn-secondary" onclick="app.editDocument(${document.id})">编辑</button>
                                                <button class="btn btn-sm btn-danger" onclick="app.deleteDocument(${document.id})">删除</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="pagination">
                    <button class="btn btn-secondary">上一页</button>
                    <span class="page-info">第 1 页，共 ${Math.ceil(documents.length / 10)} 页</span>
                    <button class="btn btn-secondary">下一页</button>
                </div>
            </div>
        `;
    }

    // 获取文档状态样式类
    getDocumentStatusClass(status) {
        const statusMap = {
            '已发布': 'status-active',
            '审核中': 'status-pending',
            '草稿': 'status-cancelled'
        };
        return statusMap[status] || 'status-pending';
    }

    // 渲染决策记录页面
    renderDecisions() {
        const decisions = this.data.decisions;

        return `
            <div class="decisions-container">
                <div class="page-header">
                    <h2 class="page-title">决策记录管理</h2>
                    <div class="page-actions">
                        <button class="btn btn-primary" onclick="app.showCreateDecisionModal()">
                            <i class="fas fa-plus"></i> 新建决策
                        </button>
                    </div>
                </div>

                <!-- 搜索和筛选 -->
                <div class="filter-bar">
                    <div class="search-box">
                        <input type="text" class="form-control" placeholder="搜索决策..." id="decisionSearch">
                        <i class="fas fa-search"></i>
                    </div>
                    <select class="form-control" id="decisionTypeFilter">
                        <option value="">全部类型</option>
                        <option value="技术决策">技术决策</option>
                        <option value="商业决策">商业决策</option>
                        <option value="预算决策">预算决策</option>
                        <option value="政策决策">政策决策</option>
                        <option value="安全决策">安全决策</option>
                        <option value="管理决策">管理决策</option>
                    </select>
                    <select class="form-control" id="decisionStatusFilter">
                        <option value="">全部状态</option>
                        <option value="已通过">已通过</option>
                        <option value="待审批">待审批</option>
                        <option value="讨论中">讨论中</option>
                        <option value="已拒绝">已拒绝</option>
                    </select>
                    <select class="form-control" id="priorityFilter">
                        <option value="">全部优先级</option>
                        <option value="高">高</option>
                        <option value="中">中</option>
                        <option value="低">低</option>
                    </select>
                </div>

                <!-- 决策列表 -->
                <div class="card">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>决策标题</th>
                                    <th>类型</th>
                                    <th>优先级</th>
                                    <th>提出者</th>
                                    <th>审批者</th>
                                    <th>决策日期</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="decisionsTableBody">
                                ${decisions.map(decision => `
                                    <tr data-id="${decision.id}">
                                        <td>
                                            <div class="decision-title">${decision.title}</div>
                                            <div class="decision-desc">${decision.description}</div>
                                        </td>
                                        <td><span class="type-badge">${decision.decisionType}</span></td>
                                        <td><span class="priority-badge priority-${decision.priority.toLowerCase()}">${decision.priority}</span></td>
                                        <td>${decision.proposer}</td>
                                        <td>${decision.approver}</td>
                                        <td>${decision.decisionDate}</td>
                                        <td><span class="status-badge ${this.getDecisionStatusClass(decision.status)}">${decision.status}</span></td>
                                        <td>
                                            <div class="action-buttons">
                                                <button class="btn btn-sm btn-primary" onclick="app.viewDecision(${decision.id})">查看</button>
                                                <button class="btn btn-sm btn-secondary" onclick="app.editDecision(${decision.id})">编辑</button>
                                                <button class="btn btn-sm btn-danger" onclick="app.deleteDecision(${decision.id})">删除</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="pagination">
                    <button class="btn btn-secondary">上一页</button>
                    <span class="page-info">第 1 页，共 ${Math.ceil(decisions.length / 10)} 页</span>
                    <button class="btn btn-secondary">下一页</button>
                </div>
            </div>
        `;
    }

    // 获取决策状态样式类
    getDecisionStatusClass(status) {
        const statusMap = {
            '已通过': 'status-active',
            '待审批': 'status-pending',
            '讨论中': 'status-pending',
            '已拒绝': 'status-cancelled'
        };
        return statusMap[status] || 'status-pending';
    }

    // 绑定参会人员相关事件
    bindParticipantEvents() {
        // 搜索功能
        const searchInput = document.getElementById('participantSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.filterParticipants();
            });
        }

        // 部门筛选
        const departmentFilter = document.getElementById('departmentFilter');
        if (departmentFilter) {
            departmentFilter.addEventListener('change', () => {
                this.filterParticipants();
            });
        }
    }

    // 筛选参会人员
    filterParticipants() {
        const searchTerm = document.getElementById('participantSearch').value.toLowerCase();
        const departmentFilter = document.getElementById('departmentFilter').value;

        const rows = document.querySelectorAll('#participantsTableBody tr');

        rows.forEach(row => {
            const name = row.querySelector('.participant-name').textContent.toLowerCase();
            const department = row.cells[1].textContent;

            const matchesSearch = name.includes(searchTerm);
            const matchesDepartment = !departmentFilter || department === departmentFilter;

            if (matchesSearch && matchesDepartment) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // 绑定文档相关事件
    bindDocumentEvents() {
        // 搜索功能
        const searchInput = document.getElementById('documentSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.filterDocuments();
            });
        }

        // 分类筛选
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.filterDocuments();
            });
        }

        // 状态筛选
        const statusFilter = document.getElementById('documentStatusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.filterDocuments();
            });
        }
    }

    // 筛选文档
    filterDocuments() {
        const searchTerm = document.getElementById('documentSearch').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;
        const statusFilter = document.getElementById('documentStatusFilter').value;

        const rows = document.querySelectorAll('#documentsTableBody tr');

        rows.forEach(row => {
            const title = row.querySelector('.document-title').textContent.toLowerCase();
            const category = row.cells[2].textContent;
            const status = row.querySelector('.status-badge').textContent;

            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = !categoryFilter || category === categoryFilter;
            const matchesStatus = !statusFilter || status === statusFilter;

            if (matchesSearch && matchesCategory && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // 绑定决策相关事件
    bindDecisionEvents() {
        // 搜索功能
        const searchInput = document.getElementById('decisionSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.filterDecisions();
            });
        }

        // 类型筛选
        const typeFilter = document.getElementById('decisionTypeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', () => {
                this.filterDecisions();
            });
        }

        // 状态筛选
        const statusFilter = document.getElementById('decisionStatusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.filterDecisions();
            });
        }

        // 优先级筛选
        const priorityFilter = document.getElementById('priorityFilter');
        if (priorityFilter) {
            priorityFilter.addEventListener('change', () => {
                this.filterDecisions();
            });
        }
    }

    // 筛选决策
    filterDecisions() {
        const searchTerm = document.getElementById('decisionSearch').value.toLowerCase();
        const typeFilter = document.getElementById('decisionTypeFilter').value;
        const statusFilter = document.getElementById('decisionStatusFilter').value;
        const priorityFilter = document.getElementById('priorityFilter').value;

        const rows = document.querySelectorAll('#decisionsTableBody tr');

        rows.forEach(row => {
            const title = row.querySelector('.decision-title').textContent.toLowerCase();
            const type = row.querySelector('.type-badge').textContent;
            const status = row.querySelector('.status-badge').textContent;
            const priority = row.querySelector('.priority-badge').textContent;

            const matchesSearch = title.includes(searchTerm);
            const matchesType = !typeFilter || type === typeFilter;
            const matchesStatus = !statusFilter || status === statusFilter;
            const matchesPriority = !priorityFilter || priority === priorityFilter;

            if (matchesSearch && matchesType && matchesStatus && matchesPriority) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
}

// 初始化应用
const app = new ConferenceApp();
