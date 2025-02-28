# Fraud Detection System

### API docs:

#### Auth Endpoints

- POST /api/auth/login
- POST /api/auth/logout

#### Transaction Endpoints

GET /api/transactions

- Query parameters:

  - risk_level (optional)
  - search_term (optional)
  - start_date (optional)
  - end_date (optional)

- POST /api/transactions/upload

- For uploading CSV data (referenced in FileUpload component)

#### Alert Endpoints

- GET /api/alerts

- Query parameters:

  - severity (optional)
  - search_term (optional)
  - status (optional)

- PATCH /api/alerts/:id/status

- For updating alert status (New, Under Review, Resolved)

#### Dashboard Statistics Endpoints

- GET /api/stats/overview

- Returns:

  - detection_rate
  - fraud_count
  - transaction_volume
  - risk_distribution

- GET /api/stats/trends

- Returns:
  - transaction_volume_by_hour
  - detection_accuracy_trend
