
import { useState } from 'react';
import { ArrowUp, ArrowDown, ArrowRight, MessageSquare, Mail, Calendar, Check, Users, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'leads' | 'campaigns' | 'followups'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Dashboard Header */}
        <div className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Marketing Automation Dashboard</h1>
                <p className="text-blue-100">Your campaign performance at a glance</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Calendar className="mr-2 h-4 w-4" />
                  Last 30 Days
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 -mt-6">
          {/* Dashboard Navigation */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedTab === 'overview' ? 'default' : 'ghost'} 
                onClick={() => setSelectedTab('overview')}
              >
                Overview
              </Button>
              <Button 
                variant={selectedTab === 'leads' ? 'default' : 'ghost'} 
                onClick={() => setSelectedTab('leads')}
              >
                Lead Funnel
              </Button>
              <Button 
                variant={selectedTab === 'campaigns' ? 'default' : 'ghost'} 
                onClick={() => setSelectedTab('campaigns')}
              >
                Campaigns
              </Button>
              <Button 
                variant={selectedTab === 'followups' ? 'default' : 'ghost'} 
                onClick={() => setSelectedTab('followups')}
              >
                Automated Follow-ups
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">1,248</div>
                  <div className="flex items-center text-green-500 text-sm font-medium">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    22%
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">24.3%</div>
                  <div className="flex items-center text-green-500 text-sm font-medium">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    4.2%
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">8</div>
                  <div className="flex items-center text-blue-500 text-sm font-medium">
                    <ArrowRight className="h-4 w-4 mr-1" />
                    3 Pending
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Follow-up Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">98.7%</div>
                  <div className="flex items-center text-green-500 text-sm font-medium">
                    <Check className="h-4 w-4 mr-1" />
                    Automated
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Based on Selected Tab */}
          {selectedTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Analytics dashboard"
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Email', value: '42%', color: 'bg-blue-500' },
                      { name: 'LinkedIn', value: '28%', color: 'bg-indigo-500' },
                      { name: 'Webinar', value: '16%', color: 'bg-purple-500' },
                      { name: 'Direct', value: '10%', color: 'bg-pink-500' },
                      { name: 'Other', value: '4%', color: 'bg-gray-500' },
                    ].map((channel, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${channel.color} mr-2`}></div>
                        <div className="flex-1 text-sm">{channel.name}</div>
                        <div className="font-medium">{channel.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === 'leads' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Funnel Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Lead Funnel Visualization */}
                      <div className="w-full max-w-md">
                        {[
                          { stage: 'Lead Generation', count: 1248, width: '100%', color: 'bg-blue-500' },
                          { stage: 'Qualification', count: 862, width: '75%', color: 'bg-indigo-600' },
                          { stage: 'Meeting Scheduled', count: 514, width: '55%', color: 'bg-violet-700' },
                          { stage: 'Proposal', count: 320, width: '40%', color: 'bg-purple-800' },
                          { stage: 'Closed', count: 148, width: '25%', color: 'bg-primary' },
                        ].map((stage, i) => (
                          <div key={i} className="mb-8 relative">
                            <div className="flex justify-between text-sm mb-1">
                              <span>{stage.stage}</span>
                              <span className="font-medium">{stage.count}</span>
                            </div>
                            <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                              <div 
                                className={`h-full ${stage.color} rounded-lg`} 
                                style={{ width: stage.width }}
                              ></div>
                            </div>
                            {i < 4 && (
                              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <ArrowDown className="h-4 w-4 text-gray-400" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lead Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { source: 'Organic Search', count: 412, percentage: '33%' },
                        { source: 'Paid Campaigns', count: 385, percentage: '31%' },
                        { source: 'Social Media', count: 247, percentage: '20%' },
                        { source: 'Referrals', count: 156, percentage: '12%' },
                        { source: 'Other', count: 48, percentage: '4%' },
                      ].map((source, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm">{source.source}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">{source.count}</span>
                            <span className="text-xs text-gray-500">{source.percentage}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Visitor to Lead', value: '3.2%', change: '+0.8%', isPositive: true },
                        { metric: 'Lead to Qualified', value: '69.1%', change: '+5.3%', isPositive: true },
                        { metric: 'Qualified to Meeting', value: '59.6%', change: '+2.1%', isPositive: true },
                        { metric: 'Meeting to Proposal', value: '62.3%', change: '-1.5%', isPositive: false },
                        { metric: 'Proposal to Close', value: '46.3%', change: '+3.8%', isPositive: true },
                      ].map((metric, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{metric.metric}</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">{metric.value}</span>
                            <span className={`text-xs ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {selectedTab === 'followups' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Follow-up Sequences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { 
                        name: 'Initial Contact', 
                        status: 'Active', 
                        steps: 4, 
                        conversion: '28%',
                        nextActions: [
                          { type: 'email', time: 'Immediate', subject: 'Thanks for your interest in Nobleloop' },
                          { type: 'email', time: 'Day 2', subject: 'How legacy businesses use our platform' },
                          { type: 'linkedin', time: 'Day 4', subject: 'Connection request' },
                          { type: 'email', time: 'Day 7', subject: 'Case study: 40% increase in qualified leads' },
                        ]
                      },
                      { 
                        name: 'Post-Demo', 
                        status: 'Active', 
                        steps: 3, 
                        conversion: '42%',
                        nextActions: [
                          { type: 'email', time: 'Immediate', subject: 'Demo recap and next steps' },
                          { type: 'call', time: 'Day 3', subject: 'Follow-up call to address questions' },
                          { type: 'email', time: 'Day 5', subject: 'Custom implementation plan' },
                        ]
                      },
                      { 
                        name: 'Nurture', 
                        status: 'Active', 
                        steps: 5, 
                        conversion: '18%',
                        nextActions: [
                          { type: 'email', time: 'Week 1', subject: 'Industry insights for legacy businesses' },
                          { type: 'email', time: 'Week 2', subject: 'Automation success story' },
                          { type: 'webinar', time: 'Week 3', subject: 'Invitation: Digital Transformation Webinar' },
                          { type: 'linkedin', time: 'Week 4', subject: 'Share relevant content' },
                          { type: 'email', time: 'Week 6', subject: 'Limited-time implementation offer' },
                        ]
                      },
                    ].map((sequence, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">{sequence.name} Sequence</h3>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                {sequence.status}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                {sequence.steps} Steps
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                Conversion: {sequence.conversion}
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="mt-2 md:mt-0">
                            Edit Sequence
                          </Button>
                        </div>
                        
                        <div className="space-y-2">
                          {sequence.nextActions.map((action, j) => (
                            <div key={j} className="flex items-center p-2 bg-gray-50 rounded">
                              {action.type === 'email' && <Mail className="h-4 w-4 text-blue-500 mr-3" />}
                              {action.type === 'call' && <MessageSquare className="h-4 w-4 text-green-500 mr-3" />}
                              {action.type === 'linkedin' && <Users className="h-4 w-4 text-blue-700 mr-3" />}
                              {action.type === 'webinar' && <BarChart3 className="h-4 w-4 text-purple-500 mr-3" />}
                              <div className="flex-1">
                                <div className="text-sm font-medium">{action.subject}</div>
                                <div className="text-xs text-gray-500">Timing: {action.time}</div>
                              </div>
                              <div className="text-xs text-gray-500">
                                {action.type === 'email' ? 'Open Rate: 42%' : 'Response Rate: 28%'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Message Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-sm font-medium mb-2">Subject Line Analysis</h3>
                    <div className="space-y-2 mb-4">
                      {[
                        { text: "Revolutionize Your Marketing with AI", score: 63 },
                        { text: "How Legacy Businesses Increase Leads by 40%", score: 89 },
                        { text: "Your Custom Marketing Automation Plan", score: 72 },
                      ].map((line, i) => (
                        <div key={i} className="flex items-center">
                          <div className="flex-1 text-sm">{line.text}</div>
                          <div className="ml-4 w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                line.score > 80 ? 'bg-green-500' : line.score > 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${line.score}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs font-medium">{line.score}%</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-medium mb-2">Content Recommendations</h3>
                    <div className="text-sm text-gray-600">
                      <p>Our AI analysis suggests:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                        <li>Include specific metrics in follow-up #2 to increase engagement by ~24%</li>
                        <li>Personalize industry examples for manufacturing segment</li>
                        <li>Adjust send time to Tuesday mornings (9-10am) for optimal open rates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === 'campaigns' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Marketing Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { 
                        name: 'Manufacturing Industry Outreach',
                        status: 'Active',
                        start: 'Mar 12, 2025',
                        end: 'Jun 15, 2025',
                        leads: 428,
                        qualified: 187,
                        meetings: 93,
                      },
                      { 
                        name: 'Healthcare Digital Transformation',
                        status: 'Active',
                        start: 'Feb 5, 2025',
                        end: 'May 30, 2025',
                        leads: 356,
                        qualified: 204,
                        meetings: 112,
                      },
                      { 
                        name: 'Financial Services Automation',
                        status: 'Active',
                        start: 'Apr 1, 2025',
                        end: 'Jul 15, 2025',
                        leads: 289,
                        qualified: 143,
                        meetings: 76,
                      },
                    ].map((campaign, i) => (
                      <div key={i} className="border rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center bg-gray-50 p-4">
                          <div className="flex-1">
                            <h3 className="font-semibold">{campaign.name}</h3>
                            <div className="flex flex-wrap items-center mt-1">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full mr-2">
                                {campaign.status}
                              </span>
                              <span className="text-xs text-gray-500">
                                {campaign.start} — {campaign.end}
                              </span>
                            </div>
                          </div>
                          <div className="flex mt-3 md:mt-0">
                            <Button size="sm" variant="outline" className="mr-2">
                              Edit
                            </Button>
                            <Button size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                        
                        <div className="p-4 flex flex-wrap gap-4">
                          <div className="bg-blue-50 p-3 rounded flex-1 min-w-[120px]">
                            <div className="text-sm text-gray-500">Total Leads</div>
                            <div className="text-xl font-bold text-blue-700">{campaign.leads}</div>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded flex-1 min-w-[120px]">
                            <div className="text-sm text-gray-500">Qualified</div>
                            <div className="text-xl font-bold text-indigo-700">{campaign.qualified}</div>
                          </div>
                          <div className="bg-primary/10 p-3 rounded flex-1 min-w-[120px]">
                            <div className="text-sm text-gray-500">Meetings</div>
                            <div className="text-xl font-bold text-primary">{campaign.meetings}</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded flex-1 min-w-[120px]">
                            <div className="text-sm text-gray-500">Conversion</div>
                            <div className="text-xl font-bold text-green-700">{Math.round(campaign.meetings / campaign.leads * 100)}%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80" 
                        alt="Campaign performance chart"
                        className="object-cover rounded-md w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Email Open Rate', value: '28.4%', change: '+2.3%', isPositive: true },
                        { metric: 'Click-Through Rate', value: '3.8%', change: '+0.6%', isPositive: true },
                        { metric: 'Form Completion', value: '12.7%', change: '-0.9%', isPositive: false },
                        { metric: 'Content Downloads', value: '856', change: '+124', isPositive: true },
                        { metric: 'Webinar Registrations', value: '392', change: '+86', isPositive: true },
                      ].map((metric, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{metric.metric}</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">{metric.value}</span>
                            <span className={`text-xs ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
