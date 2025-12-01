import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaseDetails = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseDetails();
  }, [caseId]);

  const fetchCaseDetails = async () => {
    try {
      const response = await axios.get(`/api/cases/${caseId}`);
      setCaseData(response.data);
    } catch (error) {
      console.error('Error fetching case:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!caseData) return <div className="p-6">Case not found</div>;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {caseData.caseId}
            </h1>
            <p className="text-gray-600">
              Client: {caseData.client?.fullName || 'N/A'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/cases/${caseId}/edit`)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit Case
            </button>
            <button
              onClick={() => navigate('/cases')}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => navigate(`/cases/${caseId}/documents`)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md"
        >
          <div className="text-2xl mb-2">📄</div>
          <div className="font-semibold">Documents</div>
        </button>
        <button
          onClick={() => navigate(`/cases/${caseId}/payments`)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md"
        >
          <div className="text-2xl mb-2">💰</div>
          <div className="font-semibold">Payments</div>
        </button>
        <button
          onClick={() => navigate(`/cases/${caseId}/timeline`)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md"
        >
          <div className="text-2xl mb-2">📅</div>
          <div className="font-semibold">Timeline</div>
        </button>
        <button
          onClick={() => navigate(`/cases/${caseId}/notes`)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md"
        >
          <div className="text-2xl mb-2">📝</div>
          <div className="font-semibold">Notes</div>
        </button>
      </div>

      {/* Case Information */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Case Information</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Status</label>
              <p className="font-semibold">{caseData.status}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Total Debt</label>
              <p className="font-semibold">₹{caseData.totalDebt?.toLocaleString('en-IN')}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Enrolled Amount</label>
              <p className="font-semibold">₹{caseData.enrolledAmount?.toLocaleString('en-IN')}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Settled Amount</label>
              <p className="font-semibold">₹{caseData.settledAmount?.toLocaleString('en-IN')}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Assigned To</label>
              <p className="font-semibold">{caseData.assignedTo?.name || 'Unassigned'}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Priority</label>
              <p className="font-semibold">{caseData.priority}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Creditors</h2>
          {caseData.creditors?.length > 0 ? (
            <div className="space-y-3">
              {caseData.creditors.map((creditor, index) => (
                <div key={index} className="border-b pb-3">
                  <p className="font-semibold">{creditor.name}</p>
                  <p className="text-sm text-gray-600">
                    Balance: ₹{creditor.currentBalance?.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">Status: {creditor.status}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No creditors added</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
