"use client";

import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Angel Navarrete",
    role: "Developer",
    description: "Especialista en desarrollo full-stack con experiencia en React, Node.js y tecnologías modernas. Apasionado por crear soluciones innovadoras y escalables.",
    imageUrl: "https://res.cloudinary.com/ddmf4jqh4/image/upload/v1758293549/IMG_4681_zkznax.jpg"
  },
  {
    id: 2,
    name: "Joshua Vinces",
    role: "UI/UX Designer",
    description: "Diseñador creativo especializado en experiencias de usuario intuitivas y interfaces modernas que conectan con el usuario final.",
    imageUrl: "https://res.cloudinary.com/ddmf4jqh4/image/upload/v1758293549/IMG_4678_yziyjl.jpg"
  },
  {
    id: 3,
    name: "Henry Soledispa",
    role: "Project Manager",
    description: "Líder de proyectos con amplia experiencia en metodologías ágiles y gestión de equipos multidisciplinarios orientados a resultados.",
    imageUrl: "https://res.cloudinary.com/ddmf4jqh4/image/upload/v1758293549/IMG_4687_s3xcsi.jpg"
  },
  {
    id: 4,
    name: "Cristian Mora",
    role: "Project Manager",
    description: "Líder de proyectos con amplia experiencia en metodologías ágiles y gestión de equipos multidisciplinarios orientados a resultados.",
    imageUrl: "https://res.cloudinary.com/ddmf4jqh4/image/upload/v1758295003/WhatsApp_Image_2025-09-19_at_10.14.33_qgkzgv.jpg"
  }
];

export default function Team() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16 px-4 relative">
      {/* Fondo animado igual que la página principal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elementos superiores */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2A8CFF]/20 to-[#1BC6D9]/20 rounded-full blur-3xl animate-float-bg-1" 
             style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/3 right-1/6 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/15 to-[#1BC6D9]/15 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#2A8CFF]/10 to-[#8B5CF6]/10 rounded-full blur-2xl"
             style={{ clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)' }}></div>
        
        {/* Elementos inferiores */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#1BC6D9]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-float-bg-1"
             style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-r from-[#2A8CFF]/15 to-[#1BC6D9]/15 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-tl from-[#8B5CF6]/12 to-[#2A8CFF]/12 rounded-full blur-2xl animate-float-bg-1"
             style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-[#1BC6D9]/18 to-[#2A8CFF]/18 rounded-full blur-3xl animate-float-bg-2"
             style={{ clipPath: 'polygon(45% 0%, 100% 0%, 55% 100%, 0% 100%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2A8CFF] mb-4 title-glow">
            Nuestro Equipo
          </h1>
          <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed">
            Conoce a los profesionales dedicados que hacen posible cada proyecto en GWS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative block bg-gradient-to-br from-[#2A8CFF]/10 to-[#1BC6D9]/10 rounded-2xl overflow-hidden border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 min-h-[450px]"
            >
              <img
                alt={`Foto de ${member.name}`}
                src={member.imageUrl}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-300 group-hover:opacity-25"
              />

              {/* Overlay más oscuro al hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>

              <div className="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between z-10">
                {/* Nombre y rol más pequeños y más arriba */}
                <div className="mb-2">
                  <p className="text-xs font-medium tracking-widest text-[#1BC6D9] uppercase mb-1">
                    {member.role}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {member.name}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-base text-white leading-relaxed font-medium text-shadow-lg">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#60a5fa]/10 to-[#1BC6D9]/10 rounded-2xl p-8 border border-[#60a5fa]/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2A8CFF] mb-4">
              ¿Quieres unirte a nuestro equipo?
            </h2>
            <p className="text-[#B5B5B5] mb-6 leading-relaxed">
              Estamos siempre buscando talento excepcional para formar parte de GWS. 
              Si tienes pasión por la tecnología y quieres ser parte de proyectos innovadores, 
              nos encantaría conocerte.
            </p>
            <a
              href="/trabaja"
              className="inline-block bg-[#2A8CFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1BC6D9] transition-all duration-300 shadow-lg"
            >
              Ver Oportunidades
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}