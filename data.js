// 智能会商多场景协同管理系统 - 数据文件

// 系统概览数据
const dashboardData = {
    stats: [
        { title: '本月会议总数', value: 45, icon: 'fa-video', color: '#667eea' },
        { title: '活跃参会人员', value: 128, icon: 'fa-users', color: '#28a745' },
        { title: '待处理任务', value: 23, icon: 'fa-tasks', color: '#ffc107' },
        { title: '本周决策数', value: 12, icon: 'fa-gavel', color: '#dc3545' }
    ],
    recentMeetings: [
        { id: 1, title: '季度业务规划会议', time: '2024-01-15 14:00', status: '进行中', participants: 12 },
        { id: 2, title: '产品发布评审会', time: '2024-01-15 10:00', status: '已结束', participants: 8 },
        { id: 3, title: '技术架构讨论会', time: '2024-01-14 16:00', status: '已结束', participants: 15 },
        { id: 4, title: '市场策略分析会', time: '2024-01-14 09:00', status: '已结束', participants: 10 }
    ],
    chartData: {
        meetingTrend: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            data: [32, 45, 38, 52, 41, 48]
        },
        participationRate: {
            labels: ['技术部', '市场部', '产品部', '运营部', '财务部'],
            data: [85, 92, 78, 88, 75]
        }
    }
};

// 会商会议管理数据
const meetingsData = [
    {
        id: 1,
        title: '2024年第一季度业务规划会议',
        type: '战略规划',
        startTime: '2024-01-15 14:00',
        endTime: '2024-01-15 16:00',
        location: '会议室A',
        organizer: '张经理',
        status: '进行中',
        participants: 12,
        description: '讨论2024年第一季度的业务发展规划和目标制定',
        agenda: ['业务回顾', '目标设定', '资源分配', '风险评估']
    },
    {
        id: 2,
        title: '新产品发布评审会议',
        type: '产品评审',
        startTime: '2024-01-15 10:00',
        endTime: '2024-01-15 12:00',
        location: '会议室B',
        organizer: '李总监',
        status: '已结束',
        participants: 8,
        description: '对新产品功能进行最终评审和发布决策',
        agenda: ['功能演示', '用户反馈', '市场分析', '发布计划']
    },
    {
        id: 3,
        title: '技术架构优化讨论会',
        type: '技术讨论',
        startTime: '2024-01-14 16:00',
        endTime: '2024-01-14 18:00',
        location: '技术中心',
        organizer: '王架构师',
        status: '已结束',
        participants: 15,
        description: '讨论系统架构优化方案和技术选型',
        agenda: ['现状分析', '优化方案', '技术选型', '实施计划']
    },
    {
        id: 4,
        title: '市场营销策略分析会',
        type: '市场分析',
        startTime: '2024-01-14 09:00',
        endTime: '2024-01-14 11:00',
        location: '营销部',
        organizer: '陈主管',
        status: '已结束',
        participants: 10,
        description: '分析当前市场环境，制定营销策略',
        agenda: ['市场调研', '竞品分析', '策略制定', '预算规划']
    },
    {
        id: 5,
        title: '客户服务质量提升会议',
        type: '服务优化',
        startTime: '2024-01-16 14:00',
        endTime: '2024-01-16 16:00',
        location: '客服中心',
        organizer: '刘经理',
        status: '待开始',
        participants: 12,
        description: '讨论客户服务质量提升措施和流程优化',
        agenda: ['服务现状', '问题分析', '改进措施', '培训计划']
    },
    {
        id: 6,
        title: '财务预算审核会议',
        type: '财务审核',
        startTime: '2024-01-16 10:00',
        endTime: '2024-01-16 12:00',
        location: '财务部',
        organizer: '赵总监',
        status: '待开始',
        participants: 8,
        description: '审核各部门预算申请和资金分配方案',
        agenda: ['预算申请', '资金分配', '成本控制', '风险评估']
    },
    {
        id: 7,
        title: '人力资源发展规划会',
        type: '人事规划',
        startTime: '2024-01-17 09:00',
        endTime: '2024-01-17 11:00',
        location: '人事部',
        organizer: '孙主管',
        status: '待开始',
        participants: 9,
        description: '制定人力资源发展规划和招聘计划',
        agenda: ['人员现状', '需求分析', '招聘计划', '培训体系']
    },
    {
        id: 8,
        title: '信息安全风险评估会',
        type: '安全评估',
        startTime: '2024-01-17 14:00',
        endTime: '2024-01-17 16:00',
        location: 'IT部',
        organizer: '周工程师',
        status: '待开始',
        participants: 11,
        description: '评估当前信息安全风险并制定防护措施',
        agenda: ['风险识别', '威胁分析', '防护措施', '应急预案']
    }
];

// 参会人员管理数据
const participantsData = [
    {
        id: 1,
        name: '张经理',
        department: '战略规划部',
        position: '部门经理',
        email: 'zhang.manager@company.com',
        phone: '138****1234',
        joinDate: '2020-03-15',
        meetingCount: 45,
        status: '在职',
        avatar: 'avatar1.jpg'
    },
    {
        id: 2,
        name: '李总监',
        department: '产品部',
        position: '产品总监',
        email: 'li.director@company.com',
        phone: '139****5678',
        joinDate: '2019-08-20',
        meetingCount: 52,
        status: '在职',
        avatar: 'avatar2.jpg'
    },
    {
        id: 3,
        name: '王架构师',
        department: '技术部',
        position: '首席架构师',
        email: 'wang.architect@company.com',
        phone: '137****9012',
        joinDate: '2018-12-10',
        meetingCount: 38,
        status: '在职',
        avatar: 'avatar3.jpg'
    },
    {
        id: 4,
        name: '陈主管',
        department: '市场部',
        position: '市场主管',
        email: 'chen.supervisor@company.com',
        phone: '136****3456',
        joinDate: '2021-05-08',
        meetingCount: 29,
        status: '在职',
        avatar: 'avatar4.jpg'
    },
    {
        id: 5,
        name: '刘经理',
        department: '客服部',
        position: '客服经理',
        email: 'liu.manager@company.com',
        phone: '135****7890',
        joinDate: '2020-11-22',
        meetingCount: 33,
        status: '在职',
        avatar: 'avatar5.jpg'
    },
    {
        id: 6,
        name: '赵总监',
        department: '财务部',
        position: '财务总监',
        email: 'zhao.director@company.com',
        phone: '134****2345',
        joinDate: '2017-09-15',
        meetingCount: 41,
        status: '在职',
        avatar: 'avatar6.jpg'
    },
    {
        id: 7,
        name: '孙主管',
        department: '人事部',
        position: '人事主管',
        email: 'sun.supervisor@company.com',
        phone: '133****6789',
        joinDate: '2022-01-10',
        meetingCount: 25,
        status: '在职',
        avatar: 'avatar7.jpg'
    },
    {
        id: 8,
        name: '周工程师',
        department: 'IT部',
        position: '安全工程师',
        email: 'zhou.engineer@company.com',
        phone: '132****0123',
        joinDate: '2021-07-18',
        meetingCount: 31,
        status: '在职',
        avatar: 'avatar8.jpg'
    }
];

// 文档资料管理数据
const documentsData = [
    {
        id: 1,
        title: '2024年度战略规划文档',
        type: '规划文档',
        category: '战略规划',
        author: '张经理',
        createTime: '2024-01-10 09:30',
        updateTime: '2024-01-15 14:20',
        size: '2.5MB',
        downloads: 23,
        status: '已发布',
        description: '公司2024年度整体战略规划和发展目标'
    },
    {
        id: 2,
        title: '新产品功能需求说明书',
        type: '需求文档',
        category: '产品设计',
        author: '李总监',
        createTime: '2024-01-08 16:45',
        updateTime: '2024-01-14 11:30',
        size: '1.8MB',
        downloads: 18,
        status: '已发布',
        description: '新产品核心功能需求详细说明和用户故事'
    },
    {
        id: 3,
        title: '系统架构设计方案',
        type: '技术文档',
        category: '技术架构',
        author: '王架构师',
        createTime: '2024-01-12 10:15',
        updateTime: '2024-01-14 17:45',
        size: '3.2MB',
        downloads: 15,
        status: '审核中',
        description: '系统整体架构设计和技术选型方案'
    },
    {
        id: 4,
        title: '市场调研分析报告',
        type: '分析报告',
        category: '市场分析',
        author: '陈主管',
        createTime: '2024-01-09 14:20',
        updateTime: '2024-01-13 16:10',
        size: '4.1MB',
        downloads: 27,
        status: '已发布',
        description: '目标市场深度调研和竞争对手分析报告'
    },
    {
        id: 5,
        title: '客户服务流程优化方案',
        type: '流程文档',
        category: '服务优化',
        author: '刘经理',
        createTime: '2024-01-11 11:30',
        updateTime: '2024-01-15 09:45',
        size: '1.5MB',
        downloads: 12,
        status: '草稿',
        description: '客户服务流程梳理和优化改进方案'
    },
    {
        id: 6,
        title: '财务预算分配表',
        type: '财务文档',
        category: '预算管理',
        author: '赵总监',
        createTime: '2024-01-13 08:45',
        updateTime: '2024-01-15 15:20',
        size: '0.8MB',
        downloads: 8,
        status: '已发布',
        description: '各部门年度预算分配和成本控制计划'
    },
    {
        id: 7,
        title: '员工培训计划书',
        type: '培训文档',
        category: '人力资源',
        author: '孙主管',
        createTime: '2024-01-14 13:15',
        updateTime: '2024-01-15 10:30',
        size: '2.1MB',
        downloads: 19,
        status: '审核中',
        description: '年度员工培训计划和技能提升方案'
    },
    {
        id: 8,
        title: '信息安全管理制度',
        type: '制度文档',
        category: '安全管理',
        author: '周工程师',
        createTime: '2024-01-12 15:40',
        updateTime: '2024-01-14 12:15',
        size: '1.2MB',
        downloads: 14,
        status: '已发布',
        description: '公司信息安全管理制度和操作规范'
    }
];

// 决策记录管理数据
const decisionsData = [
    {
        id: 1,
        title: '采用微服务架构决策',
        meetingId: 3,
        meetingTitle: '技术架构优化讨论会',
        decisionType: '技术决策',
        priority: '高',
        status: '已通过',
        proposer: '王架构师',
        approver: '技术委员会',
        decisionDate: '2024-01-14',
        implementDate: '2024-02-01',
        description: '决定采用微服务架构重构现有系统，提升系统可扩展性和维护性',
        impact: '需要6个月时间完成重构，预计投入200万成本',
        risks: '技术复杂度增加，需要团队学习新技术栈'
    },
    {
        id: 2,
        title: '新产品定价策略决策',
        meetingId: 2,
        meetingTitle: '新产品发布评审会议',
        decisionType: '商业决策',
        priority: '高',
        status: '已通过',
        proposer: '李总监',
        approver: '产品委员会',
        decisionDate: '2024-01-15',
        implementDate: '2024-01-20',
        description: '确定新产品采用分层定价策略，基础版免费，高级版收费',
        impact: '预计能够吸引更多用户，提升市场占有率',
        risks: '免费用户转化率可能低于预期'
    },
    {
        id: 3,
        title: '市场推广预算增加决策',
        meetingId: 4,
        meetingTitle: '市场营销策略分析会',
        decisionType: '预算决策',
        priority: '中',
        status: '已通过',
        proposer: '陈主管',
        approver: '财务委员会',
        decisionDate: '2024-01-14',
        implementDate: '2024-01-16',
        description: '增加Q1市场推广预算50万，用于线上广告投放和品牌宣传',
        impact: '预期提升品牌知名度和用户获取量',
        risks: 'ROI可能不达预期，需要密切监控效果'
    },
    {
        id: 4,
        title: '远程办公政策调整决策',
        meetingId: 7,
        meetingTitle: '人力资源发展规划会',
        decisionType: '政策决策',
        priority: '中',
        status: '待审批',
        proposer: '孙主管',
        approver: '人事委员会',
        decisionDate: '2024-01-17',
        implementDate: '2024-02-01',
        description: '允许员工每周最多2天远程办公，提升工作灵活性',
        impact: '提升员工满意度，降低办公成本',
        risks: '可能影响团队协作效率'
    },
    {
        id: 5,
        title: '客户服务系统升级决策',
        meetingId: 5,
        meetingTitle: '客户服务质量提升会议',
        decisionType: '技术决策',
        priority: '高',
        status: '待审批',
        proposer: '刘经理',
        approver: '技术委员会',
        decisionDate: '2024-01-16',
        implementDate: '2024-03-01',
        description: '升级客户服务系统，引入AI智能客服功能',
        impact: '提升客户服务效率，降低人工成本',
        risks: '系统切换期间可能影响服务质量'
    },
    {
        id: 6,
        title: '供应商合作模式调整决策',
        meetingId: 1,
        meetingTitle: '季度业务规划会议',
        decisionType: '商业决策',
        priority: '中',
        status: '讨论中',
        proposer: '张经理',
        approver: '业务委员会',
        decisionDate: '2024-01-15',
        implementDate: '2024-04-01',
        description: '调整供应商合作模式，建立长期战略合作关系',
        impact: '降低采购成本，提升供应链稳定性',
        risks: '对单一供应商依赖度增加'
    },
    {
        id: 7,
        title: '数据安全加密策略决策',
        meetingId: 8,
        meetingTitle: '信息安全风险评估会',
        decisionType: '安全决策',
        priority: '高',
        status: '待审批',
        proposer: '周工程师',
        approver: '安全委员会',
        decisionDate: '2024-01-17',
        implementDate: '2024-02-15',
        description: '实施端到端数据加密，提升数据安全防护等级',
        impact: '大幅提升数据安全性，符合合规要求',
        risks: '可能影响系统性能，增加开发复杂度'
    },
    {
        id: 8,
        title: '员工绩效考核体系优化决策',
        meetingId: 7,
        meetingTitle: '人力资源发展规划会',
        decisionType: '管理决策',
        priority: '中',
        status: '讨论中',
        proposer: '孙主管',
        approver: '人事委员会',
        decisionDate: '2024-01-17',
        implementDate: '2024-03-01',
        description: '优化员工绩效考核体系，引入360度评估机制',
        impact: '提升考核公平性，促进员工发展',
        risks: '实施初期可能引起员工不适应'
    }
];

// 任务分配跟踪数据
const tasksData = [
    {
        id: 1,
        title: '系统架构重构任务',
        description: '完成微服务架构的详细设计和实施计划',
        assignee: '王架构师',
        assigner: '张经理',
        priority: '高',
        status: '进行中',
        progress: 65,
        startDate: '2024-01-15',
        dueDate: '2024-03-15',
        estimatedHours: 240,
        actualHours: 156,
        relatedMeeting: '技术架构优化讨论会',
        tags: ['技术', '架构', '重构']
    },
    {
        id: 2,
        title: '新产品市场调研',
        description: '完成目标市场的深度调研和用户需求分析',
        assignee: '陈主管',
        assigner: '李总监',
        priority: '高',
        status: '已完成',
        progress: 100,
        startDate: '2024-01-08',
        dueDate: '2024-01-20',
        estimatedHours: 80,
        actualHours: 75,
        relatedMeeting: '市场营销策略分析会',
        tags: ['市场', '调研', '分析']
    },
    {
        id: 3,
        title: '客户服务流程优化',
        description: '梳理现有客户服务流程，提出优化改进方案',
        assignee: '刘经理',
        assigner: '张经理',
        priority: '中',
        status: '进行中',
        progress: 40,
        startDate: '2024-01-12',
        dueDate: '2024-02-12',
        estimatedHours: 120,
        actualHours: 48,
        relatedMeeting: '客户服务质量提升会议',
        tags: ['服务', '流程', '优化']
    },
    {
        id: 4,
        title: '财务预算审核',
        description: '审核各部门提交的年度预算申请',
        assignee: '赵总监',
        assigner: '张经理',
        priority: '高',
        status: '待开始',
        progress: 0,
        startDate: '2024-01-18',
        dueDate: '2024-01-25',
        estimatedHours: 40,
        actualHours: 0,
        relatedMeeting: '财务预算审核会议',
        tags: ['财务', '预算', '审核']
    },
    {
        id: 5,
        title: '员工培训计划制定',
        description: '制定2024年度员工培训计划和课程安排',
        assignee: '孙主管',
        assigner: '张经理',
        priority: '中',
        status: '进行中',
        progress: 30,
        startDate: '2024-01-10',
        dueDate: '2024-02-10',
        estimatedHours: 60,
        actualHours: 18,
        relatedMeeting: '人力资源发展规划会',
        tags: ['培训', '人事', '计划']
    },
    {
        id: 6,
        title: '信息安全风险评估',
        description: '全面评估公司信息安全风险并制定防护措施',
        assignee: '周工程师',
        assigner: '王架构师',
        priority: '高',
        status: '待开始',
        progress: 0,
        startDate: '2024-01-20',
        dueDate: '2024-02-20',
        estimatedHours: 100,
        actualHours: 0,
        relatedMeeting: '信息安全风险评估会',
        tags: ['安全', '风险', '评估']
    },
    {
        id: 7,
        title: '产品功能测试',
        description: '对新产品功能进行全面测试和质量验证',
        assignee: '测试团队',
        assigner: '李总监',
        priority: '高',
        status: '进行中',
        progress: 80,
        startDate: '2024-01-05',
        dueDate: '2024-01-22',
        estimatedHours: 160,
        actualHours: 128,
        relatedMeeting: '新产品发布评审会议',
        tags: ['测试', '产品', '质量']
    },
    {
        id: 8,
        title: '营销活动策划',
        description: '策划Q1季度营销活动和推广方案',
        assignee: '营销团队',
        assigner: '陈主管',
        priority: '中',
        status: '已完成',
        progress: 100,
        startDate: '2024-01-01',
        dueDate: '2024-01-15',
        estimatedHours: 80,
        actualHours: 85,
        relatedMeeting: '市场营销策略分析会',
        tags: ['营销', '策划', '推广']
    }
];

// 数据分析报告数据
const analyticsData = {
    meetingStats: {
        totalMeetings: 156,
        avgDuration: 2.5,
        participationRate: 85.6,
        completionRate: 92.3,
        monthlyTrend: [
            { month: '7月', meetings: 18, duration: 2.2, participation: 82 },
            { month: '8月', meetings: 22, duration: 2.4, participation: 84 },
            { month: '9月', meetings: 25, duration: 2.6, participation: 86 },
            { month: '10月', meetings: 28, duration: 2.5, participation: 88 },
            { month: '11月', meetings: 31, duration: 2.7, participation: 87 },
            { month: '12月', meetings: 32, duration: 2.3, participation: 89 }
        ]
    },
    departmentStats: [
        { department: '技术部', meetings: 45, decisions: 23, tasks: 67, efficiency: 88 },
        { department: '产品部', meetings: 38, decisions: 19, tasks: 52, efficiency: 92 },
        { department: '市场部', meetings: 32, decisions: 15, tasks: 43, efficiency: 85 },
        { department: '财务部', meetings: 28, decisions: 12, tasks: 35, efficiency: 90 },
        { department: '人事部', meetings: 25, decisions: 10, tasks: 38, efficiency: 87 },
        { department: '客服部', meetings: 22, decisions: 8, tasks: 29, efficiency: 83 },
        { department: 'IT部', meetings: 20, decisions: 7, tasks: 31, efficiency: 86 },
        { department: '运营部', meetings: 18, decisions: 6, tasks: 25, efficiency: 84 }
    ],
    taskStats: {
        total: 289,
        completed: 178,
        inProgress: 67,
        pending: 44,
        overdue: 12,
        avgCompletionTime: 8.5,
        priorityDistribution: {
            high: 89,
            medium: 134,
            low: 66
        }
    },
    decisionStats: {
        total: 100,
        approved: 67,
        pending: 23,
        rejected: 10,
        avgApprovalTime: 3.2,
        typeDistribution: {
            technical: 35,
            business: 28,
            policy: 20,
            budget: 17
        }
    }
};

// 系统设置配置数据
const settingsData = {
    general: {
        systemName: '智能会商多场景协同管理系统',
        version: 'v1.0.0',
        timezone: 'Asia/Shanghai',
        language: 'zh-CN',
        dateFormat: 'YYYY-MM-DD',
        timeFormat: '24h',
        autoSave: true,
        autoSaveInterval: 5
    },
    meeting: {
        defaultDuration: 120,
        reminderTime: [15, 30, 60],
        maxParticipants: 50,
        allowRecording: true,
        autoTranscript: false,
        requireApproval: true,
        bookingAdvance: 7
    },
    notification: {
        emailEnabled: true,
        smsEnabled: false,
        pushEnabled: true,
        meetingReminder: true,
        taskDeadline: true,
        decisionUpdate: true,
        systemMaintenance: true
    },
    security: {
        passwordPolicy: {
            minLength: 8,
            requireUppercase: true,
            requireLowercase: true,
            requireNumbers: true,
            requireSpecialChars: true,
            expirationDays: 90
        },
        sessionTimeout: 30,
        maxLoginAttempts: 5,
        twoFactorAuth: false,
        ipWhitelist: [],
        auditLog: true
    },
    backup: {
        autoBackup: true,
        backupInterval: 'daily',
        retentionDays: 30,
        backupLocation: 'cloud',
        encryptBackup: true
    }
};

// 用户权限管理数据
const permissionsData = {
    roles: [
        {
            id: 1,
            name: '系统管理员',
            description: '拥有系统所有权限，可以管理用户、角色和系统设置',
            permissions: ['*'],
            userCount: 2,
            createdDate: '2023-01-01',
            status: '启用'
        },
        {
            id: 2,
            name: '部门经理',
            description: '可以管理本部门的会议、任务和人员',
            permissions: ['meeting.manage', 'task.manage', 'participant.view', 'document.manage'],
            userCount: 8,
            createdDate: '2023-01-01',
            status: '启用'
        },
        {
            id: 3,
            name: '项目负责人',
            description: '可以创建和管理项目相关的会议和任务',
            permissions: ['meeting.create', 'task.create', 'document.upload', 'decision.propose'],
            userCount: 15,
            createdDate: '2023-01-01',
            status: '启用'
        },
        {
            id: 4,
            name: '普通员工',
            description: '可以参加会议、查看任务和文档',
            permissions: ['meeting.join', 'task.view', 'document.view', 'notification.receive'],
            userCount: 103,
            createdDate: '2023-01-01',
            status: '启用'
        },
        {
            id: 5,
            name: '访客用户',
            description: '只能查看公开信息，参加指定会议',
            permissions: ['meeting.join.public', 'document.view.public'],
            userCount: 5,
            createdDate: '2023-06-01',
            status: '启用'
        },
        {
            id: 6,
            name: '财务审核员',
            description: '专门负责财务相关的审核和决策',
            permissions: ['decision.approve.budget', 'document.view.financial', 'meeting.join.financial'],
            userCount: 3,
            createdDate: '2023-03-01',
            status: '启用'
        },
        {
            id: 7,
            name: '技术专家',
            description: '负责技术决策和架构评审',
            permissions: ['decision.approve.technical', 'document.manage.technical', 'meeting.create.technical'],
            userCount: 6,
            createdDate: '2023-02-01',
            status: '启用'
        },
        {
            id: 8,
            name: '临时用户',
            description: '临时访问权限，有时间限制',
            permissions: ['meeting.join.assigned', 'document.view.assigned'],
            userCount: 0,
            createdDate: '2023-12-01',
            status: '禁用'
        }
    ],
    permissions: [
        { id: 'meeting.create', name: '创建会议', category: '会议管理' },
        { id: 'meeting.manage', name: '管理会议', category: '会议管理' },
        { id: 'meeting.join', name: '参加会议', category: '会议管理' },
        { id: 'meeting.delete', name: '删除会议', category: '会议管理' },
        { id: 'task.create', name: '创建任务', category: '任务管理' },
        { id: 'task.manage', name: '管理任务', category: '任务管理' },
        { id: 'task.view', name: '查看任务', category: '任务管理' },
        { id: 'task.assign', name: '分配任务', category: '任务管理' },
        { id: 'document.upload', name: '上传文档', category: '文档管理' },
        { id: 'document.manage', name: '管理文档', category: '文档管理' },
        { id: 'document.view', name: '查看文档', category: '文档管理' },
        { id: 'document.download', name: '下载文档', category: '文档管理' },
        { id: 'decision.propose', name: '提出决策', category: '决策管理' },
        { id: 'decision.approve', name: '审批决策', category: '决策管理' },
        { id: 'decision.view', name: '查看决策', category: '决策管理' },
        { id: 'user.manage', name: '用户管理', category: '系统管理' },
        { id: 'role.manage', name: '角色管理', category: '系统管理' },
        { id: 'system.config', name: '系统配置', category: '系统管理' }
    ]
};

// 消息通知中心数据
const notificationsData = [
    {
        id: 1,
        title: '会议提醒：季度业务规划会议',
        content: '您有一个会议将在30分钟后开始，请及时参加。',
        type: '会议提醒',
        priority: '高',
        status: '未读',
        sender: '系统',
        recipient: '当前用户',
        createTime: '2024-01-15 13:30',
        readTime: null,
        relatedId: 1,
        relatedType: 'meeting'
    },
    {
        id: 2,
        title: '任务分配：系统架构重构任务',
        content: '您被分配了一个新任务：系统架构重构任务，请及时查看详情。',
        type: '任务通知',
        priority: '高',
        status: '已读',
        sender: '张经理',
        recipient: '王架构师',
        createTime: '2024-01-15 09:15',
        readTime: '2024-01-15 09:45',
        relatedId: 1,
        relatedType: 'task'
    },
    {
        id: 3,
        title: '决策审批：采用微服务架构决策',
        content: '您提出的决策"采用微服务架构决策"已通过审批。',
        type: '决策通知',
        priority: '中',
        status: '已读',
        sender: '技术委员会',
        recipient: '王架构师',
        createTime: '2024-01-14 18:20',
        readTime: '2024-01-14 19:10',
        relatedId: 1,
        relatedType: 'decision'
    },
    {
        id: 4,
        title: '文档更新：新产品功能需求说明书',
        content: '文档"新产品功能需求说明书"已更新，请查看最新版本。',
        type: '文档通知',
        priority: '中',
        status: '未读',
        sender: '李总监',
        recipient: '产品团队',
        createTime: '2024-01-14 11:30',
        readTime: null,
        relatedId: 2,
        relatedType: 'document'
    },
    {
        id: 5,
        title: '系统维护通知',
        content: '系统将于今晚22:00-24:00进行维护升级，期间可能影响正常使用。',
        type: '系统通知',
        priority: '中',
        status: '未读',
        sender: '系统管理员',
        recipient: '全体用户',
        createTime: '2024-01-15 16:00',
        readTime: null,
        relatedId: null,
        relatedType: 'system'
    },
    {
        id: 6,
        title: '任务截止提醒：新产品市场调研',
        content: '您的任务"新产品市场调研"将在3天后截止，请注意时间安排。',
        type: '任务提醒',
        priority: '中',
        status: '已读',
        sender: '系统',
        recipient: '陈主管',
        createTime: '2024-01-14 08:00',
        readTime: '2024-01-14 08:30',
        relatedId: 2,
        relatedType: 'task'
    },
    {
        id: 7,
        title: '权限变更通知',
        content: '您的账户权限已更新，新增了文档管理权限。',
        type: '权限通知',
        priority: '低',
        status: '已读',
        sender: '系统管理员',
        recipient: '刘经理',
        createTime: '2024-01-13 14:45',
        readTime: '2024-01-13 15:20',
        relatedId: null,
        relatedType: 'permission'
    },
    {
        id: 8,
        title: '会议纪要已发布：技术架构优化讨论会',
        content: '会议"技术架构优化讨论会"的纪要已发布，请查看会议决策和后续行动。',
        type: '会议通知',
        priority: '中',
        status: '未读',
        sender: '会议秘书',
        recipient: '参会人员',
        createTime: '2024-01-14 19:30',
        readTime: null,
        relatedId: 3,
        relatedType: 'meeting'
    }
];

// 导出所有数据
window.appData = {
    dashboard: dashboardData,
    meetings: meetingsData,
    participants: participantsData,
    documents: documentsData,
    decisions: decisionsData,
    tasks: tasksData,
    analytics: analyticsData,
    settings: settingsData,
    permissions: permissionsData,
    notifications: notificationsData
};
