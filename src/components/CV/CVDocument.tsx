import React, { useState } from 'react';
import InfoItem from './InfoItem';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart,
  Target,
  Activity,
  Languages,
  FileText,
  Star,
  Facebook, 
  Instagram as InstagramIcon,
  Linkedin,
  Github
} from 'lucide-react';

const CVDocument: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white animate-fade-in">
      {/* Banner */}
      <div 
        className="bg-cover bg-center h-48 relative shadow-lg" 
        style={{ backgroundImage: `url("https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742656384/2294820181canhdepmienbac-1711070654909_nkrodi.jpg")` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img 
            src="https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742657168/7fe4feca-264c-4bee-a854-ed4023fe0461_xgvch8.jpg" 
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105"
          />
        </div>
      </div>
      
      {/* Navbar */}
      <div className="flex justify-center mt-20 mb-8 sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm py-4">
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#objective" className="text-blue-600 border-b-2 border-blue-600 pb-1 transition-all hover:text-blue-700">Mục tiêu</a>
          <a href="#info" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all">Thông tin</a>
          <a href="#experience" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all">Kinh nghiệm</a>
          <a href="#education" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all">Học vấn</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        <h1 className="text-center text-3xl font-bold mb-2 text-gray-800">Nguyen Minh Tuyen</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Front-end Developer & Kỹ sư Viễn thông</p>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <Section title="Mục tiêu nghề nghiệp" id="objective" icon={<Target size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp, nơi có thể áp dụng kiến thức và kỹ năng về viễn thông và công nghệ vào thực tế. Học hỏi, trao đổi ý tưởng với đồng nghiệp, quản lý hệ thống mạng, phát triển phần mềm và nghiên cứu các công nghệ mới như IoT, AI, và điện toán đám mây.
              </p>
            </Section>
            
            <Section title="Kinh nghiệm làm việc" id="experience" icon={<Briefcase size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="relative border-l-2 border-gray-200 pl-6 space-y-6 ml-3">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                <ExperienceItem
                  title="Kĩ thuật viên bảo trì Indoor-outdoor"
                  company="Tập đoàn bưu chính viễn thông VNPT"
                  period="2024 - 2024"
                >
                  <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600">
                    <li className="hover:text-blue-600 transition-colors">Bảo trì và bảo dưỡng các thiết bị viễn thông</li>
                    <li className="hover:text-blue-600 transition-colors">Kiểm tra định kỳ trạm BTS và hệ thống tổng đài</li>
                    <li className="hover:text-blue-600 transition-colors">Xử lý sự cố kỹ thuật kịp thời</li>
                  </ul>
                </ExperienceItem>
                
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1/3"></div>
                <ExperienceItem
                  title="Kĩ thuật viên"
                  company="NamHaComputer"
                  period="2024 - 2024"
                >
                  <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600">
                    <li className="hover:text-blue-600 transition-colors">Sửa chữa và bảo trì máy tính, laptop</li>
                    <li className="hover:text-blue-600 transition-colors">Cài đặt và cấu hình phần mềm</li>
                    <li className="hover:text-blue-600 transition-colors">Tư vấn khách hàng về giải pháp công nghệ</li>
                  </ul>
                </ExperienceItem>

                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2/3"></div>
                <ExperienceItem
                  title="Front-end Developer"
                  company="Khách hàng cá nhân"
                  period="2025"
                >
                  <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600">
                    <li className="hover:text-blue-600 transition-colors">Thiết kế giao diện website responsive</li>
                    <li className="hover:text-blue-600 transition-colors">Tối ưu trải nghiệm người dùng</li>
                    <li className="hover:text-blue-600 transition-colors">Phát triển các tính năng tương tác</li>
                  </ul>
                </ExperienceItem>
              </div> 
            </Section>
            
            <Section title="Học vấn" id="education" icon={<GraduationCap size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="relative border-l-2 border-gray-200 pl-6 space-y-6 ml-2">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                <ExperienceItem
                  title="Đại học Giao thông vận tải"
                  company="Điện tử viễn thông"
                  period="2019 - 2024"
                >
                  <p className="text-gray-600 mt-2">Chuyên ngành: Điện tử viễn thông</p>
                </ExperienceItem>
                
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1/3"></div>
                <ExperienceItem
                  title="Học viện Green Academy"
                  company="Full-stack Web Development"
                  period="2024 - 2025"
                >
                  <p className="text-gray-600 mt-2">Chứng chỉ: Full-stack Web Development</p>
                </ExperienceItem>
              </div>
            </Section>
          </div>
          
          {/* Right Column */}
          <div>
            <Section title="Thông tin cá nhân" id="info" icon={<User size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <InfoItem icon={Calendar} text="21/12/2000" className="hover:text-blue-600 transition-colors" />
                  <InfoItem icon={User} text="Nam" className="hover:text-blue-600 transition-colors" />
                  <InfoItem icon={Phone} text="0356766847" link="tel:0356766847" className="hover:text-blue-600 transition-colors" />
                  <InfoItem icon={MapPin} text="xã Hà Hồi, huyện Thường Tín, Hà Nội" className="hover:text-blue-600 transition-colors" />
                </div>
                <div className="space-y-4">
                  <InfoItem 
                    icon={Mail} 
                    text="nguyenminhtuyen21122000t@gmail.com" 
                    link="mailto:nguyenminhtuyen21122000t@gmail.com"
                    className="hover:text-blue-600 transition-colors" 
                  />
                  <div className="flex space-x-2 mt-6">
                    <a href="https://www.facebook.com/nguyenminh.tuyen.7731" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/tnz2k" target="_blank" rel="noopener noreferrer"
                       className="text-pink-600 hover:text-pink-700 transition-colors">
                      <InstagramIcon size={24} />
                    </a>
                  
                  </div>
                </div>
              </div>
            </Section>
            
            <Section title="Kỹ năng" id="skills" icon={<Star size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <h3 className="font-medium mb-3 text-gray-800">Chuyên môn</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">HTML/CSS</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">JavaScript</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Tailwind CSS</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Bootstrap</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">React</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Git/GitHub</span>
                </div>
              </div>
              
              <h3 className="font-medium mb-3 text-gray-800">Viễn thông</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Bảo trì Indoor</span>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Bảo trì Outdoor</span>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Hệ thống tổng đài</span>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-sm text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <span className="font-medium text-gray-800">Trạm BTS</span>
                </div>
              </div>
            </Section>
            
            <Section title="Ngôn ngữ" id="languages" icon={<Languages size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800">Tiếng Anh</span>
                    <span className="text-sm text-blue-600 font-medium">B1</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </Section>
            
            <Section title="Sở thích" id="hobbies" icon={<Heart size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Heart size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Đọc sách</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Activity size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Thể thao</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Globe size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Du lịch</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <FileText size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Học tập</p>
                </div>
              </div>
            </Section>
            
            <Section title="Chứng chỉ" id="certificates" icon={<Award size={20} />} className="mb-8 hover:shadow-md transition-shadow rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                    <Award size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tiếng anh B1</h3>
                    <p className="text-sm text-gray-600">Cấp năm 2023</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDocument;
