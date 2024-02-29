#aws #disaster_recovery_migrations #tranfer_large_data

### Solutions (4)
- Over internet / Site to Site VPN: Slowest
- DX connect 1Gps: Long time for setup the connection (over a month)
- Snowball: 1 week for end-to-end datatransfer, 
  Can combined with DMS (for data transfer for the rest of data afterward)
- On-going replication/transfer: Site to Site VPN/ DX + DMS or DataSync