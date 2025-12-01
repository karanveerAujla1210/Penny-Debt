import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCase = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client: '',
    totalDebt: '',
    status: 'new',
    priority: 'medium',
    assignedTo: '',
    source: 'website'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/cases', formData);
      alert(`Case created successfully! Case ID: ${response.data.caseId}`);
      navigate(`/cases/${response.data.caseId}`);
    } catch (error) {
      console.error('Error creating case:', error);
      alert('Failed to create case');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create New Case</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Client ID</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Enter client MongoDB ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Total Debt Amount</label>
            <input
              type="number"
              name="totalDebt"
              value={formData.totalDebt}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Enter total debt amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="new">New</option>
              <option value="in_review">In Review</option>
              <option value="negotiating">Negotiating</option>
              <option value="settled">Settled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assigned To (Employee ID)</label>
            <input
              type="text"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter employee MongoDB ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Source</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="website">Website</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="referral">Referral</option>
              <option value="walk-in">Walk-in</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? 'Creating...' : 'Create Case'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/cases')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Case ID will be automatically generated in format: PD-YYYY-XXXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateCase;
