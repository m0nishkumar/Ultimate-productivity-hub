
import React, { useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export function CustomNotification({ title, message, onClose }) {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Automatically close the notification after 5 seconds
  
      return () => {
        clearTimeout(timer); // Clear the timer on unmount
      };
    }, [onClose]);
  
    return (
      <div className="custom-notification">

      </div>
    );
  }