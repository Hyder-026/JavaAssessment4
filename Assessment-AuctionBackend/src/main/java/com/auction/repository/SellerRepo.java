package com.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auction.models.Seller;

@Repository
public interface SellerRepo extends JpaRepository<Seller,Integer> {

}
