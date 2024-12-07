import { useState } from 'react';
import Header from '../layouts/partials/header';

export default function Settings() {
  const [adminEmail, setAdminEmail] = useState('admin@yupoll.com');
  const [password, setPassword] = useState('');
  const [pollDuration, setPollDuration] = useState(24); // In hours
  const [maxOptions, setMaxOptions] = useState(6);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [defaultNotificationTemplate, setDefaultNotificationTemplate] = useState('Welcome');
  const [theme, setTheme] = useState('light');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header header="Settings" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Account Preferences */}
              <div className="bg-white px-6 py-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Account Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">Update Admin Email</label>
                    <input
                      type="email"
                      id="adminEmail"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter new admin email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Update Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter new password"
                    />
                  </div>
                </div>
              </div>

              {/* Poll Settings */}
              <div className="bg-white px-6 py-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Poll Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="pollDuration" className="block text-sm font-medium text-gray-700">Default Poll Duration (hours)</label>
                    <input
                      type="number"
                      id="pollDuration"
                      value={pollDuration}
                      onChange={(e) => setPollDuration(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      min="1"
                      placeholder="Enter poll duration in hours"
                    />
                  </div>
                  <div>
                    <label htmlFor="maxOptions" className="block text-sm font-medium text-gray-700">Max Options Per Poll</label>
                    <input
                      type="number"
                      id="maxOptions"
                      value={maxOptions}
                      onChange={(e) => setMaxOptions(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      min="1"
                      placeholder="Enter max options per poll"
                    />
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="bg-white px-6 py-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="pushNotifications" className="block text-sm font-medium text-gray-700">Enable/Disable Push Notifications</label>
                    <div className="mt-2 flex items-center gap-4">
                      <label htmlFor="pushNotificationsEnabled" className="text-sm font-medium text-gray-600">Push Notifications</label>
                      <input
                        type="checkbox"
                        id="pushNotificationsEnabled"
                        checked={pushNotificationsEnabled}
                        onChange={(e) => setPushNotificationsEnabled(e.target.checked)}
                        className="form-checkbox"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notificationTemplate" className="block text-sm font-medium text-gray-700">Default Notification Template</label>
                    <select
                      id="notificationTemplate"
                      value={defaultNotificationTemplate}
                      onChange={(e) => setDefaultNotificationTemplate(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="Welcome">Welcome</option>
                      <option value="Reminder">Reminder</option>
                      <option value="Expiration">Expiration</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* General Settings */}
              <div className="bg-white px-6 py-4 rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Application Theme</label>
                    <select
                      id="theme"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Save Changes */}
              <div className="mt-6 flex justify-end gap-2 p-4">
                <button
                  type="button"
                  className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-200 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 border text-xs rounded-md font-medium bg-red bg-opacity-80 text-white"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
