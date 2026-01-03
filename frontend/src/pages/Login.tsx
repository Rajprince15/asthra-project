import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, mockCentres, mockPatients } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [activeTab, setActiveTab] = useState<'centre' | 'patient'>('centre');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCentreLogin = () => {
    // Auto-login with CENTRE001 credentials
    const centre = mockCentres.find(c => c.centre_id === 'CENTRE001');
    
    if (centre) {
      login({ id: 'CENTRE001', role: 'centre' });
      toast({
        title: 'Login Successful',
        description: 'Welcome, Centre Admin!',
      });
      navigate('/');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid centre ID or password.',
        variant: 'destructive',
      });
    }
  };

  const handlePatientLogin = () => {
    // Auto-login with PAT001 credentials
    const patient = mockPatients.find(p => p.patient_id === 'PAT001');
    
    if (patient) {
      login({ id: 'PAT001', role: 'patient', centreId: 'CENTRE001' });
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
      navigate('/');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <h1 className="text-2xl font-bold text-center">NHFF-Net Login</h1>
            <p className="text-center text-blue-100 text-sm mt-1">One-click demo login</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('centre')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === 'centre'
                  ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Centre Login
            </button>
            <button
              onClick={() => setActiveTab('patient')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === 'patient'
                  ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Patient Login
            </button>
          </div>

          {/* Login Sections */}
          <div className="p-6">
            {activeTab === 'centre' ? (
              <div className="space-y-4">
                <div className="text-center py-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Centre Demo Login</h3>
                  <p className="text-sm text-gray-500 mb-4">Click below to login as Centre Admin</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-gray-600 mb-1">Demo Credentials:</p>
                    <p className="text-sm font-medium text-gray-700">Centre ID: CENTRE001</p>
                    <p className="text-sm font-medium text-gray-700">Password: centre123</p>
                  </div>
                </div>
                
                <button
                  onClick={handleCentreLogin}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Login as Centre
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center py-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Patient Demo Login</h3>
                  <p className="text-sm text-gray-500 mb-4">Click below to login as Patient</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-gray-600 mb-1">Demo Credentials:</p>
                    <p className="text-sm font-medium text-gray-700">Patient ID: PAT001</p>
                    <p className="text-sm font-medium text-gray-700">Centre ID: CENTRE001</p>
                    <p className="text-sm font-medium text-gray-700">Password: patient123</p>
                  </div>
                </div>
                
                <button
                  onClick={handlePatientLogin}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Login as Patient
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;