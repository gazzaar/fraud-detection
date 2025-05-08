# Fraud Detection System 🛡️

A modern, real-time fraud detection system designed to help businesses identify and prevent fraudulent transactions through advanced analytics and machine learning.

## 📸 Demo

### Landing page

![Landing Page](assets/demo1.png)

### More About

![More About](assets/demo-2.png)

### Dashboard Overview

![Dashboard Overview](assets/demo3.png)

## 🚀 Features

- Real-time transaction monitoring
- Risk level assessment
- Advanced analytics dashboard
- Customizable alert system
- CSV data upload support
- Historical transaction analysis
- Trend visualization
- Alert management workflow

## 🛠️ API Documentation

### Authentication Endpoints

#### Login

```http
POST /api/auth/login
```

#### Logout

```http
POST /api/auth/logout
```

### Transaction Endpoints

#### Get Transactions

```http
GET /api/transactions
```

Query Parameters:

- `risk_level` (optional) - Filter by risk level
- `search_term` (optional) - Search transactions
- `start_date` (optional) - Filter from date
- `end_date` (optional) - Filter to date

#### Upload Transactions

```http
POST /api/transactions/upload
```

Supports CSV file upload for bulk transaction processing.

### Alert Endpoints

#### Get Alerts

```http
GET /api/alerts
```

Query Parameters:

- `severity` (optional) - Filter by alert severity
- `search_term` (optional) - Search alerts
- `status` (optional) - Filter by alert status

#### Update Alert Status

```http
PATCH /api/alerts/:id/status
```

Update alert status (New, Under Review, Resolved)

### Dashboard Statistics

#### Overview Statistics

```http
GET /api/stats/overview
```

Returns:

- Detection rate
- Fraud count
- Transaction volume
- Risk distribution

#### Trend Analysis

```http
GET /api/stats/trends
```

Returns:

- Transaction volume by hour
- Detection accuracy trend
