import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function Bai3() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Bạn chưa nhập tên thành phố!");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("Không tìm thấy thành phố!");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const weatherRes = await fetch(weatherUrl);
      const weatherData = await weatherRes.json();

      setWeather(weatherData.current_weather);
    } catch (e) {
      setError("Lỗi khi gọi API!");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: "#ffffff" }]}
        placeholder="Nhập thành phố"
        value={city}
        onChangeText={setCity}
      />

      <Button onPress={getWeather} >Xem thời tiết</Button>

      {loading && <Text style={styles.text}>Đang tải...</Text>}
      {error !== "" && <Text style={[styles.text, { color: "red" }]}>{error}</Text>}

      {weather && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>
            🌡 Nhiệt độ hiện tại: {weather?.temperature}°C
          </Text>
          <Text style={styles.text}>
            💨 Tốc độ gió: {weather?.windspeed} km/h
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: "white",
  },
});
