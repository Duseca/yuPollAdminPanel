import { useState } from "react";
import Header from "../layouts/partials/header";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "New Poll Created",
      message: "A new poll has been created. Check it out!",
      recipient: "All Users",
      status: "Sent",
      sentAt: "2024-12-01 12:00 PM",
    },
    {
      id: "2",
      title: "Password Change Alert",
      message: "Your password was successfully changed.",
      recipient: "Jane123",
      status: "Scheduled",
      sentAt: "2024-12-02 10:00 AM",
    },
  ]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showNewNotificationForm, setShowNewNotificationForm] = useState(false);
  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    recipient: "",
    status: "Draft",
    sentAt: "",
  });

  const [recipientType, setRecipientType] = useState("All Users"); // 'All Users' or 'Particular User'
  const [selectedUser, setSelectedUser] = useState("");

  const users = [
    { id: "1", username: "Jane123" },
    { id: "2", username: "JohnDoe" },
    { id: "3", username: "Admin" },
  ]; // List of users to send to

  const handleSendNewNotification = () => {
    const newId = `${notifications.length + 1}`;
    const recipient =
      recipientType === "All Users" ? "All Users" : selectedUser;
    const newNotificationWithId = {
      ...newNotification,
      id: newId,
      recipient,
      sentAt: new Date().toLocaleString(),
    };
    setNotifications([...notifications, newNotificationWithId]);
    setShowNewNotificationForm(false); // Hide the form after sending
    setNewNotification({
      title: "",
      message: "",
      recipient: "",
      status: "Draft",
      sentAt: "",
    }); // Reset form
    setRecipientType("All Users");
    setSelectedUser("");
  };

  return (
    <div>
      <Header header="Notifications" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-4">
          <div className="space-y-6">
            <div className="flex justify-end">
            <button
              onClick={() => setShowNewNotificationForm(true)}
              className="px-4 py-2 bg-red bg-opacity-80 text-white rounded-md"
            >
              Send New Notification
            </button>
            </div>

            {/* Notification List Table */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Notification ID</th>
                    <th className="px-4 py-2 border-b">Title</th>
                    <th className="px-4 py-2 border-b">Recipient(s)</th>
                    <th className="px-4 py-2 border-b">Status</th>
                    <th className="px-4 py-2 border-b">Sent At</th>
                    <th className="px-4 py-2 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((notification) => (
                    <tr key={notification.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{notification.id}</td>
                      <td className="px-4 py-2 border-b">
                        {notification.title}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {notification.recipient}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {notification.status}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {notification.sentAt}
                      </td>
                      <td className="px-4 py-2 border-b">
                        <button
                          onClick={() => setSelectedNotification(notification)}
                          className="font-medium text-white bg-red px-3 py-0.5 rounded-md bg-opacity-80"
                        >
                          Resend
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New Notification Form */}
            {showNewNotificationForm && (
              <div className="bg-white p-6 rounded-md shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Send New Notification
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newNotification.title}
                      onChange={(e) =>
                        setNewNotification({
                          ...newNotification,
                          title: e.target.value,
                        })
                      }
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={newNotification.message}
                      onChange={(e) =>
                        setNewNotification({
                          ...newNotification,
                          message: e.target.value,
                        })
                      }
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="recipientType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recipient Type
                    </label>
                    <select
                      id="recipientType"
                      value={recipientType}
                      onChange={(e) => {
                        setRecipientType(e.target.value);
                        if (e.target.value === "All Users") {
                          setSelectedUser("");
                        }
                      }}
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="All Users">All Users</option>
                      <option value="Particular User">Particular User</option>
                    </select>
                  </div>

                  {recipientType === "Particular User" && (
                    <div>
                      <label
                        htmlFor="selectedUser"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select User
                      </label>
                      <select
                        id="selectedUser"
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select a user</option>
                        {users.map((user) => (
                          <option key={user.id} value={user.username}>
                            {user.username}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      value={newNotification.status}
                      onChange={(e) =>
                        setNewNotification({
                          ...newNotification,
                          status: e.target.value,
                        })
                      }
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="Sent">Sent</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowNewNotificationForm(false)}
                      className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-200 text-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSendNewNotification}
                      className="px-5 py-2 border text-xs rounded-md font-medium bg-red bg-opacity-90 text-white"
                    >
                      Send Notification
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
